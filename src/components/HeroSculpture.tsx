import { useRef, useState, useEffect, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { SculptureFallback } from './SculptureFallback';

/* ------------------------------------------------------------------ */
/*  Detect reduced-motion preference (Lazy initialized for purity)   */
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
/*  Precision Machined Titanium Monolith Sculpture                    */
/* ------------------------------------------------------------------ */
interface SculptureProps {
  reducedMotion: boolean;
}

function ArchitecturalMonolith({ reducedMotion }: SculptureProps) {
  const groupRef = useRef<THREE.Group>(null!);
  const coreRef = useRef<THREE.Mesh>(null!);
  const outerBand1Ref = useRef<THREE.Group>(null!);
  const outerBand2Ref = useRef<THREE.Group>(null!);
  const horizonRingRef = useRef<THREE.Mesh>(null!);

  const { viewport } = useThree();

  // Pointer tracking with smooth damping target
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

  // Entrance scale animation
  const entranceProgress = useRef(0);

  // Materials setup
  const materials = useMemo(() => {
    return {
      // 1. Dark Brushed Titanium Monolith
      titaniumDark: new THREE.MeshPhysicalMaterial({
        color: '#1C1F26',
        metalness: 0.92,
        roughness: 0.22,
        clearcoat: 0.4,
        clearcoatRoughness: 0.15,
        reflectivity: 0.7,
      }),
      // 2. Precision Platinum Structural Band
      platinumBand: new THREE.MeshStandardMaterial({
        color: '#D4D8E0',
        metalness: 0.96,
        roughness: 0.18,
      }),
      // 3. Graphite Secondary Framing
      graphiteMetal: new THREE.MeshStandardMaterial({
        color: '#2A2E38',
        metalness: 0.88,
        roughness: 0.28,
      }),
      // 4. Subtle Electric Blue Accent Pivot Pin
      electricAccent: new THREE.MeshStandardMaterial({
        color: '#8AA9FF',
        metalness: 0.9,
        roughness: 0.15,
        emissive: '#8AA9FF',
        emissiveIntensity: 0.18,
      }),
    };
  }, []);

  // Clean up materials on unmount
  useEffect(() => {
    return () => {
      Object.values(materials).forEach((m) => m.dispose());
    };
  }, [materials]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Entrance scaling smoothly up to 1
    if (entranceProgress.current < 1) {
      entranceProgress.current = Math.min(1, entranceProgress.current + delta * 0.9);
      const t = entranceProgress.current;
      const eased = 1 - Math.pow(1 - t, 4);
      groupRef.current.scale.setScalar(eased);
    }

    if (reducedMotion) return;

    const time = state.clock.getElapsedTime();

    // Smooth lerp pointer interaction
    mouseCurrent.current.x = THREE.MathUtils.lerp(
      mouseCurrent.current.x,
      mouseTarget.current.x,
      delta * 2.2
    );
    mouseCurrent.current.y = THREE.MathUtils.lerp(
      mouseCurrent.current.y,
      mouseTarget.current.y,
      delta * 2.2
    );

    // Responsive subtle gyro tilt
    const isMobile = viewport.width < 5;
    const tiltMultiplier = isMobile ? 0.12 : 0.32;
    groupRef.current.rotation.y = mouseCurrent.current.x * tiltMultiplier + time * 0.07;
    groupRef.current.rotation.x = -mouseCurrent.current.y * (tiltMultiplier * 0.5) + Math.sin(time * 0.2) * 0.04;

    // Controlled differential precession
    if (coreRef.current) {
      coreRef.current.rotation.y = -time * 0.08;
      coreRef.current.rotation.z = Math.cos(time * 0.25) * 0.03;
    }

    if (outerBand1Ref.current) {
      outerBand1Ref.current.rotation.x = 0.6 + Math.sin(time * 0.3) * 0.06;
      outerBand1Ref.current.rotation.y = time * 0.11;
    }

    if (outerBand2Ref.current) {
      outerBand2Ref.current.rotation.x = -0.45 + Math.cos(time * 0.25) * 0.05;
      outerBand2Ref.current.rotation.z = -time * 0.09;
    }

    if (horizonRingRef.current) {
      horizonRingRef.current.rotation.z = time * 0.03;
    }
  });

  return (
    <group ref={groupRef} scale={0} position={[0, 0.08, 0]}>
      {/* 1. CENTRAL PRECISION MONOLITH (Faceted Octahedral Titanium Core) */}
      <mesh ref={coreRef} material={materials.titaniumDark} castShadow receiveShadow>
        <octahedronGeometry args={[0.85, 1]} />
      </mesh>

      {/* Internal Core Spine */}
      <mesh material={materials.graphiteMetal} scale={[0.25, 0.95, 0.25]}>
        <cylinderGeometry args={[0.16, 0.16, 1.25, 16]} />
      </mesh>

      {/* 2. PRIMARY PLATINUM ARCHITECTURAL BAND */}
      <group ref={outerBand1Ref}>
        <mesh material={materials.platinumBand} castShadow>
          <torusGeometry args={[1.25, 0.055, 24, 64]} />
        </mesh>
        {/* Precision blue accent clamp */}
        <mesh material={materials.electricAccent} position={[1.25, 0, 0]}>
          <boxGeometry args={[0.08, 0.12, 0.1]} />
        </mesh>
      </group>

      {/* 3. SECONDARY INTERLOCKING TITANIUM BAND */}
      <group ref={outerBand2Ref}>
        <mesh material={materials.graphiteMetal} castShadow>
          <torusGeometry args={[1.45, 0.038, 24, 64]} />
        </mesh>
        {/* Structural counterweight */}
        <mesh material={materials.platinumBand} position={[0, 1.45, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.07, 0.07, 0.12]} />
        </mesh>
      </group>

      {/* 4. DELICATE HORIZON METRIC RING */}
      <mesh
        ref={horizonRingRef}
        material={materials.platinumBand}
        rotation={[Math.PI / 2.3, 0, 0]}
      >
        <ringGeometry args={[1.76, 1.775, 48]} />
      </mesh>

      {/* 5. PRECISION SATELLITE PIVOTS */}
      <mesh position={[1.5, 0.6, -0.4]} material={materials.electricAccent}>
        <octahedronGeometry args={[0.08, 0]} />
      </mesh>

      <mesh position={[-1.4, -0.5, 0.5]} material={materials.platinumBand}>
        <dodecahedronGeometry args={[0.07, 0]} />
      </mesh>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Cinematic Studio Lighting (Pure Three.js, Zero CDN Dependencies) */
/* ------------------------------------------------------------------ */
function CinematicStudio({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      {/* Neutral ambient fill */}
      <ambientLight intensity={0.45} color="#D6DAE4" />

      {/* Key Light: High-angle sharp key illuminating titanium facets */}
      <directionalLight
        position={[4, 6, 4]}
        intensity={1.35}
        color="#F0F4FA"
        castShadow
        shadow-mapSize={[512, 512]}
        shadow-camera-near={0.5}
        shadow-camera-far={15}
        shadow-camera-left={-2.5}
        shadow-camera-right={2.5}
        shadow-camera-top={2.5}
        shadow-camera-bottom={-2.5}
      />

      {/* Cool-Blue Rim Light: Edge definition along metallic contours */}
      <directionalLight position={[-4, 2, -3]} intensity={0.8} color="#8AA9FF" />

      {/* Soft Platinum Counter-Fill */}
      <pointLight position={[0, -2, 2]} intensity={0.35} color="#9298A2" />

      {/* Organic floating buoyancy */}
      <Float
        speed={reducedMotion ? 0 : 1.3}
        rotationIntensity={reducedMotion ? 0 : 0.15}
        floatIntensity={reducedMotion ? 0 : 0.3}
        floatingRange={[-0.06, 0.06]}
      >
        <ArchitecturalMonolith reducedMotion={reducedMotion} />
      </Float>

      {/* Soft grounded shadow beneath sculpture */}
      <ContactShadows
        position={[0, -1.85, 0]}
        opacity={0.65}
        scale={4.8}
        blur={2.4}
        far={3.2}
        color="#000000"
      />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Exported Component with Canvas & Graceful Fallback               */
/* ------------------------------------------------------------------ */
export default function HeroSculpture() {
  const reducedMotion = usePrefersReducedMotion();
  const [hasWebGL, setHasWebGL] = useState(() => {
    if (typeof window === 'undefined') return false;
    return supportsWebGL();
  });

  // Watch for WebGL context loss on older graphics cards
  useEffect(() => {
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      setHasWebGL(false);
    };

    window.addEventListener('webglcontextlost', handleContextLost, false);
    return () => {
      window.removeEventListener('webglcontextlost', handleContextLost);
    };
  }, []);

  if (!hasWebGL) {
    return <SculptureFallback />;
  }

  return (
    <div className="relative w-full h-full min-h-[360px] sm:min-h-[440px] lg:min-h-[560px]">
      <Canvas
        camera={{ position: [0, 0, 4.4], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'default',
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <CinematicStudio reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>

      {/* Architectural status badge */}
      <div
        className="pointer-events-none absolute bottom-3 right-4 hidden sm:flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-[#9298A2]"
        aria-hidden="true"
      >
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#8AA9FF] animate-pulse" />
        <span>INTERACTIVE 3D · TITANIUM MONOLITH</span>
      </div>
    </div>
  );
}
