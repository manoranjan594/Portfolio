import { useRef, useState, useEffect, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  CanvasTexture,
  EquirectangularReflectionMapping,
  BufferGeometry,
  Float32BufferAttribute,
  type Group,
  type Mesh,
  type Points,
  type Texture,
} from 'three';
import { SculptureFallback } from './SculptureFallback';

/* ------------------------------------------------------------------ */
/*  Detect reduced-motion preference                                  */
/* ------------------------------------------------------------------ */
function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}

/* ------------------------------------------------------------------ */
/*  Detect WebGL support with hardware context validation             */
/* ------------------------------------------------------------------ */
function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

/* ------------------------------------------------------------------ */
/*  Atmospheric Studio Environment Map Generator (Golden Sun & Emerald)*/
/* ------------------------------------------------------------------ */
function useAtmosphericEmeraldStudioEnv(): Texture | null {
  return useMemo(() => {
    if (typeof document === 'undefined') return null;
    try {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      // Deep emerald and warm sky gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, 256);
      bgGrad.addColorStop(0, '#06100B');
      bgGrad.addColorStop(0.35, '#0B1E16');
      bgGrad.addColorStop(0.7, '#133526');
      bgGrad.addColorStop(1, '#08140D');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 512, 256);

      // Warm Golden Key Light softbox (Sunbeam reflection from right)
      const sunStrip = ctx.createLinearGradient(340, 0, 480, 0);
      sunStrip.addColorStop(0, 'rgba(255, 230, 180, 0)');
      sunStrip.addColorStop(0.5, 'rgba(255, 240, 210, 0.95)');
      sunStrip.addColorStop(1, 'rgba(255, 230, 180, 0)');
      ctx.fillStyle = sunStrip;
      ctx.fillRect(340, 10, 140, 230);

      // Emerald Rim Light softbox from left
      const emeraldStrip = ctx.createLinearGradient(30, 0, 140, 0);
      emeraldStrip.addColorStop(0, 'rgba(213, 242, 163, 0)');
      emeraldStrip.addColorStop(0.5, 'rgba(213, 242, 163, 0.7)');
      emeraldStrip.addColorStop(1, 'rgba(213, 242, 163, 0)');
      ctx.fillStyle = emeraldStrip;
      ctx.fillRect(30, 20, 110, 210);

      // Warm overhead radiance disc
      const radial = ctx.createRadialGradient(256, 40, 0, 256, 40, 90);
      radial.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      radial.addColorStop(0.6, 'rgba(255, 230, 180, 0.45)');
      radial.addColorStop(1, 'rgba(255, 230, 180, 0)');
      ctx.fillStyle = radial;
      ctx.beginPath();
      ctx.arc(256, 40, 90, 0, Math.PI * 2);
      ctx.fill();

      const texture = new CanvasTexture(canvas);
      texture.mapping = EquirectangularReflectionMapping;
      return texture;
    } catch {
      return null;
    }
  }, []);
}

/* ------------------------------------------------------------------ */
/*  Floating Fine Golden & Emerald Stardust Particles                 */
/* ------------------------------------------------------------------ */
function SubtleStardust() {
  const pointsRef = useRef<Points>(null!);

  const [geo] = useState(() => {
    const count = 90;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 1.35 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.9;
      positions[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
      positions[i * 3 + 1] = radius * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi);
    }
    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
    return geometry;
  });

  useFrame((state) => {
    if (pointsRef.current) {
      const t = state.clock.elapsedTime * 0.04;
      pointsRef.current.rotation.y = t;
      pointsRef.current.rotation.x = t * 0.3;
    }
  });

  return (
    <points ref={pointsRef} geometry={geo}>
      <pointsMaterial
        size={0.032}
        color="#F4D068"
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ------------------------------------------------------------------ */
/*  Master Centerpiece: Emerald Glass Sphere & Gyroscopic Gold Rings  */
/* ------------------------------------------------------------------ */
interface CenterpieceProps {
  reducedMotion: boolean;
}

function SculpturalCenterpiece({ reducedMotion }: CenterpieceProps) {
  const masterGroupRef = useRef<Group>(null!);
  const emeraldSphereRef = useRef<Mesh>(null!);
  const innerGemRef = useRef<Mesh>(null!);
  const goldRing1Ref = useRef<Mesh>(null!);
  const goldRing2Ref = useRef<Mesh>(null!);
  const goldRing3Ref = useRef<Mesh>(null!);
  const goldRing4Ref = useRef<Mesh>(null!);
  const satellite1GroupRef = useRef<Group>(null!);
  const satellite2GroupRef = useRef<Group>(null!);

  const { viewport } = useThree();

  // Pointer tracking with fluid lerping
  const mouseTarget = useRef({ x: 0, y: 0 });
  const mouseCurrent = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      mouseTarget.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseTarget.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, []);

  // Scroll tracking with smooth damping
  const scrollTarget = useRef(0);
  const scrollCurrent = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      scrollTarget.current = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Exquisite Physical Materials
  const materials = useMemo(() => {
    return {
      // 1. Translucent Emerald Glass Sphere (Refraction, high IOR, deep crystal green)
      emeraldGlass: new MeshPhysicalMaterial({
        color: '#063B23',
        metalness: 0.12,
        roughness: 0.08,
        transmission: 0.82,
        thickness: 2.8,
        ior: 1.62,
        attenuationColor: '#021F12',
        attenuationDistance: 0.9,
        clearcoat: 1.0,
        clearcoatRoughness: 0.02,
        sheen: 1.0,
        sheenColor: '#D5F2A3',
        reflectivity: 0.98,
        transparent: true,
        opacity: 0.96,
      }),
      // 2. Central Organic Faceted Jade/Emerald Core
      emeraldCore: new MeshPhysicalMaterial({
        color: '#032114',
        metalness: 0.35,
        roughness: 0.12,
        clearcoat: 1.0,
        clearcoatRoughness: 0.04,
        reflectivity: 0.95,
      }),
      // 3. Polished Champagne Gold Metallic Rings
      champagneGold: new MeshStandardMaterial({
        color: '#F0C968',
        metalness: 0.98,
        roughness: 0.07,
      }),
      // 4. Warm Gleaming Astrolabe Gold
      amberGold: new MeshStandardMaterial({
        color: '#D4AF37',
        metalness: 0.98,
        roughness: 0.08,
      }),
      // 5. Pale Celestial Outer Gold
      celestialGold: new MeshStandardMaterial({
        color: '#FFE28A',
        metalness: 0.98,
        roughness: 0.06,
      }),
      // 6. Satellite Emerald Beads
      satelliteEmerald: new MeshPhysicalMaterial({
        color: '#063B23',
        metalness: 0.15,
        roughness: 0.08,
        clearcoat: 1.0,
        clearcoatRoughness: 0.03,
        reflectivity: 0.95,
      }),
    };
  }, []);

  // Cleanup materials on unmount
  useEffect(() => {
    return () => {
      Object.values(materials).forEach((m) => m.dispose());
    };
  }, [materials]);

  useFrame((state, delta) => {
    if (!masterGroupRef.current) return;

    // Fluid pointer damping
    const lerpFactor = Math.min(delta * 3.8, 0.14);
    mouseCurrent.current.x += (mouseTarget.current.x - mouseCurrent.current.x) * lerpFactor;
    mouseCurrent.current.y += (mouseTarget.current.y - mouseCurrent.current.y) * lerpFactor;

    // Fluid scroll damping
    const scrollLerp = Math.min(delta * 3.5, 0.12);
    scrollCurrent.current += (scrollTarget.current - scrollCurrent.current) * scrollLerp;
    const scrollNorm = Math.min(scrollCurrent.current / 850, 1.4);

    if (!reducedMotion) {
      const t = state.clock.getElapsedTime();

      // Master rotation & gentle floating oscillation + scroll parallax response
      masterGroupRef.current.position.y = Math.sin(t * 1.1) * 0.08 - scrollNorm * 0.18;
      masterGroupRef.current.rotation.y = t * 0.18 + mouseCurrent.current.x * 0.45 + scrollNorm * 0.55;
      masterGroupRef.current.rotation.x = 0.12 + Math.sin(t * 0.18) * 0.05 + mouseCurrent.current.y * 0.28 + scrollNorm * 0.35;

      // Emerald sphere slow counter-spin
      if (emeraldSphereRef.current) {
        emeraldSphereRef.current.rotation.y = t * 0.12;
      }

      // Inner gem tumble
      if (innerGemRef.current) {
        innerGemRef.current.rotation.y = -t * 0.25;
        innerGemRef.current.rotation.z = t * 0.15;
      }

      // 4 Golden Rings gyroscopic orbital movements
      if (goldRing1Ref.current) {
        goldRing1Ref.current.rotation.z = -t * 0.22;
        goldRing1Ref.current.rotation.x = Math.PI * 0.28 + Math.sin(t * 0.2) * 0.12;
      }

      if (goldRing2Ref.current) {
        goldRing2Ref.current.rotation.y = t * 0.24;
        goldRing2Ref.current.rotation.z = Math.PI * 0.45 + Math.cos(t * 0.18) * 0.10;
      }

      if (goldRing3Ref.current) {
        goldRing3Ref.current.rotation.x = -Math.PI * 0.32 + Math.sin(t * 0.22) * 0.14;
        goldRing3Ref.current.rotation.z = t * 0.16;
      }

      if (goldRing4Ref.current) {
        goldRing4Ref.current.rotation.y = -t * 0.18;
      }

      // Satellites orbiting
      if (satellite1GroupRef.current) {
        satellite1GroupRef.current.rotation.y = t * 0.35;
        satellite1GroupRef.current.rotation.x = Math.sin(t * 0.25) * 0.2;
      }

      if (satellite2GroupRef.current) {
        satellite2GroupRef.current.rotation.z = -t * 0.28;
      }
    } else {
      masterGroupRef.current.position.y = 0;
      masterGroupRef.current.rotation.y = 0.4;
      masterGroupRef.current.rotation.x = 0.2;
    }
  });

  // Responsive scale based on viewport width (Tuned to prevent canvas boundary clipping)
  const scale = useMemo(() => {
    return Math.min(Math.max(viewport.width * 0.23, 0.85), 1.18);
  }, [viewport.width]);

  return (
    <group ref={masterGroupRef} scale={scale} position={[0, -0.05, 0]}>
      {/* 1. Primary Feature: Sculptural Emerald-Glass Sphere */}
      <mesh
        ref={emeraldSphereRef}
        material={materials.emeraldGlass}
        castShadow
        receiveShadow
      >
        <sphereGeometry args={[1.04, 64, 64]} />
      </mesh>

      {/* 2. Floating Inner Faceted Emerald Gem Core */}
      <mesh
        ref={innerGemRef}
        position={[0, 0, 0]}
        material={materials.emeraldCore}
      >
        <icosahedronGeometry args={[0.62, 1]} />
      </mesh>

      {/* 3. Primary Equatorial Champagne Gold Ring */}
      <mesh
        ref={goldRing1Ref}
        rotation={[Math.PI * 0.26, 0, Math.PI * 0.18]}
        material={materials.champagneGold}
        castShadow
      >
        <torusGeometry args={[1.52, 0.052, 32, 100]} />
      </mesh>

      {/* 4. Polar / Meridian Armillary Gold Ring */}
      <mesh
        ref={goldRing2Ref}
        rotation={[Math.PI * 0.54, Math.PI * 0.22, 0]}
        material={materials.amberGold}
        castShadow
      >
        <torusGeometry args={[1.62, 0.044, 32, 100]} />
      </mesh>

      {/* 5. Oblique Astrolabe Gold Ring */}
      <mesh
        ref={goldRing3Ref}
        rotation={[-Math.PI * 0.36, Math.PI * 0.38, -Math.PI * 0.16]}
        material={materials.champagneGold}
        castShadow
      >
        <torusGeometry args={[1.42, 0.048, 32, 100]} />
      </mesh>

      {/* 6. Outer Celestial Fine Gold Ring */}
      <mesh
        ref={goldRing4Ref}
        rotation={[Math.PI * 0.12, -Math.PI * 0.28, Math.PI * 0.42]}
        material={materials.celestialGold}
      >
        <torusGeometry args={[1.72, 0.026, 32, 100]} />
      </mesh>

      {/* 7. Orbiting Satellite 1 (Top-Right Bead with mini gold ring) */}
      <group ref={satellite1GroupRef}>
        <mesh position={[1.35, 0.85, 0.3]} material={materials.satelliteEmerald}>
          <sphereGeometry args={[0.13, 32, 32]} />
        </mesh>
        <mesh position={[1.35, 0.85, 0.3]} rotation={[Math.PI / 4, 0, 0]} material={materials.champagneGold}>
          <torusGeometry args={[0.22, 0.016, 16, 48]} />
        </mesh>
      </group>

      {/* 8. Orbiting Satellite 2 (Left Bead) */}
      <group ref={satellite2GroupRef}>
        <mesh position={[-1.4, 0.25, 0.45]} material={materials.satelliteEmerald}>
          <sphereGeometry args={[0.11, 32, 32]} />
        </mesh>
        <mesh position={[-0.75, 1.35, -0.35]} material={materials.satelliteEmerald}>
          <sphereGeometry args={[0.08, 24, 24]} />
        </mesh>
      </group>

      {/* 9. Floating Fine Golden Stardust Particles */}
      <SubtleStardust />

      {/* 10. Deep Inner Crystal Emerald Radiance Point Light */}
      <pointLight position={[0, 0, 0]} intensity={1.1} color="#52B788" distance={3.2} />
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Studio Cinematic Lighting Rig (Warm Alpine Sunbeam & Emerald Rim) */
/* ------------------------------------------------------------------ */
function StudioLighting() {
  return (
    <>
      <ambientLight intensity={0.65} color="#051B12" />
      {/* Golden Sunbeams streaming from the right mountain window */}
      <directionalLight position={[8, 7, 5]} intensity={4.5} color="#FFE6B0" castShadow />
      {/* Emerald rim light from left architectural corridor */}
      <directionalLight position={[-7, 4, -3]} intensity={1.4} color="#74C69D" />
      {/* Warm soft ground fill */}
      <directionalLight position={[1, -5, 3]} intensity={1.2} color="#D4AF37" />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Exported HeroSculpture Component                             */
/* ------------------------------------------------------------------ */
export default function HeroSculpture() {
  const reducedMotion = usePrefersReducedMotion();
  const [canRender] = useState(() => supportsWebGL());

  if (!canRender) {
    return <SculptureFallback />;
  }

  return (
    <div
      className="relative w-full h-full flex items-center justify-center select-none"
      style={{ touchAction: 'pan-y' }}
      aria-label="Interactive 3D Emerald Armillary Sphere Sculpture"
      role="img"
    >
      <Canvas
        camera={{ position: [0, 0, 5.6], fov: 42 }}
        dpr={[1, Math.min(window.devicePixelRatio || 1, 2)]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <Suspense fallback={null}>
          <StudioLighting />
          <SculpturalCenterpiece reducedMotion={reducedMotion} />
          <EnvironmentBackdrop />
        </Suspense>
      </Canvas>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Procedural Atmospheric Environment                                */
/* ------------------------------------------------------------------ */
function EnvironmentBackdrop() {
  const envTexture = useAtmosphericEmeraldStudioEnv();
  const { scene } = useThree();

  useEffect(() => {
    // eslint-disable-next-line react/immutability
    scene.environment = envTexture;
    return () => {
      // eslint-disable-next-line react/immutability
      scene.environment = null;
    };
  }, [envTexture, scene]);

  return null;
}
