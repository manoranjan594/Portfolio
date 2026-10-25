import { useRef, useState, useEffect, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, ContactShadows } from '@react-three/drei';
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
/*  The Atelier Totem Sculptural Assembly                             */
/* ------------------------------------------------------------------ */
interface TotemProps {
  reducedMotion: boolean;
}

function AtelierTotem({ reducedMotion }: TotemProps) {
  const groupRef = useRef<THREE.Group>(null!);
  const coreRef = useRef<THREE.Mesh>(null!);
  const goldRingRef = useRef<THREE.Group>(null!);
  const bronzeArmatureRef = useRef<THREE.Group>(null!);
  const outerHorizonRef = useRef<THREE.Mesh>(null!);
  const satellite1Ref = useRef<THREE.Mesh>(null!);
  const satellite2Ref = useRef<THREE.Mesh>(null!);

  const { viewport } = useThree();

  // Pointer tracking with smooth damping target
  const mouseTarget = useRef({ x: 0, y: 0 });
  const mouseCurrent = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      // Normalize -1 to 1 based on window
      mouseTarget.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseTarget.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, []);

  // Entrance scale animation
  const entranceProgress = useRef(0);

  // Materials setup with memory disposal tracking
  const materials = useMemo(() => {
    return {
      // 1. Honed Alabaster / Porcelain Core
      porcelain: new THREE.MeshPhysicalMaterial({
        color: '#FAF5EE',
        roughness: 0.28,
        metalness: 0.06,
        clearcoat: 0.45,
        clearcoatRoughness: 0.15,
        reflectivity: 0.6,
        envMapIntensity: 1.1,
      }),
      // 2. Champagne Gold Polished Metal
      champagneGold: new THREE.MeshStandardMaterial({
        color: '#C4A36B',
        metalness: 0.94,
        roughness: 0.16,
        envMapIntensity: 1.5,
      }),
      // 3. Muted Bronze Architectural Armature
      mutedBronze: new THREE.MeshStandardMaterial({
        color: '#9C7049',
        metalness: 0.88,
        roughness: 0.26,
        envMapIntensity: 1.2,
      }),
      // 4. Fine Dark Charcoal Accent Metal
      darkAccent: new THREE.MeshStandardMaterial({
        color: '#292722',
        metalness: 0.8,
        roughness: 0.35,
      }),
    };
  }, []);

  // Clean up materials when unmounted to prevent VRAM accumulation on older graphics
  useEffect(() => {
    return () => {
      Object.values(materials).forEach((mat) => mat.dispose());
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

    // Smooth lerp pointer interaction (damped frame-rate independent)
    mouseCurrent.current.x = THREE.MathUtils.lerp(
      mouseCurrent.current.x,
      mouseTarget.current.x,
      delta * 2.5
    );
    mouseCurrent.current.y = THREE.MathUtils.lerp(
      mouseCurrent.current.y,
      mouseTarget.current.y,
      delta * 2.5
    );

    // Responsive gyro tilt applied to master group
    const isMobile = viewport.width < 5;
    const tiltMultiplier = isMobile ? 0.15 : 0.4;
    groupRef.current.rotation.y = mouseCurrent.current.x * tiltMultiplier + time * 0.08;
    groupRef.current.rotation.x = -mouseCurrent.current.y * (tiltMultiplier * 0.6) + Math.sin(time * 0.25) * 0.05;

    // Independent precession for interlocking sculptural components:
    // 1. Central porcelain monolith counter-rotates gently
    if (coreRef.current) {
      coreRef.current.rotation.y = -time * 0.09;
      coreRef.current.rotation.z = Math.cos(time * 0.3) * 0.04;
    }

    // 2. Champagne Gold primary Mobius/Torus ring
    if (goldRingRef.current) {
      goldRingRef.current.rotation.x = 0.55 + Math.sin(time * 0.35) * 0.08;
      goldRingRef.current.rotation.y = time * 0.14;
      goldRingRef.current.rotation.z = Math.cos(time * 0.2) * 0.1;
    }

    // 3. Bronze secondary gyroscope armature
    if (bronzeArmatureRef.current) {
      bronzeArmatureRef.current.rotation.x = -0.4 + Math.cos(time * 0.3) * 0.06;
      bronzeArmatureRef.current.rotation.z = -time * 0.11;
    }

    // 4. Subtle outer horizon disc
    if (outerHorizonRef.current) {
      outerHorizonRef.current.rotation.z = time * 0.04;
    }

    // 5. Delicate orbiting satellite markers
    if (satellite1Ref.current) {
      const satTime1 = time * 0.45;
      satellite1Ref.current.position.x = Math.cos(satTime1) * 1.7;
      satellite1Ref.current.position.y = Math.sin(satTime1 * 0.8) * 0.45 + 0.3;
      satellite1Ref.current.position.z = Math.sin(satTime1) * 1.7;
      satellite1Ref.current.rotation.y = satTime1 * 2;
    }

    if (satellite2Ref.current) {
      const satTime2 = -time * 0.35 + 2.5;
      satellite2Ref.current.position.x = Math.cos(satTime2) * 1.45;
      satellite2Ref.current.position.y = Math.sin(satTime2 * 1.2) * 0.5 - 0.2;
      satellite2Ref.current.position.z = Math.sin(satTime2) * 1.45;
      satellite2Ref.current.rotation.x = satTime2 * 1.5;
    }
  });

  return (
    <group ref={groupRef} scale={0} position={[0, 0.1, 0]}>
      {/* 1. Central Porcelain Monolith */}
      <mesh ref={coreRef} material={materials.porcelain} castShadow receiveShadow>
        <octahedronGeometry args={[0.82, 1]} />
      </mesh>

      {/* Internal dark accent spine */}
      <mesh material={materials.darkAccent} scale={[0.3, 0.9, 0.3]}>
        <cylinderGeometry args={[0.15, 0.15, 1.2, 12]} />
      </mesh>

      {/* 2. Primary Champagne Gold Sculptural Torus Band (Optimized vertices) */}
      <group ref={goldRingRef}>
        <mesh material={materials.champagneGold} castShadow>
          <torusGeometry args={[1.22, 0.065, 24, 64]} />
        </mesh>
        <mesh material={materials.porcelain} position={[1.22, 0, 0]}>
          <sphereGeometry args={[0.07, 16, 16]} />
        </mesh>
      </group>

      {/* 3. Muted Bronze Gyroscopic Armature (Optimized vertices) */}
      <group ref={bronzeArmatureRef}>
        <mesh material={materials.mutedBronze} castShadow>
          <torusGeometry args={[1.42, 0.038, 24, 64]} />
        </mesh>
        <mesh material={materials.champagneGold} position={[0, 1.42, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.08, 0.08, 0.14]} />
        </mesh>
      </group>

      {/* 4. Outer Delicate Horizon Ring */}
      <mesh
        ref={outerHorizonRef}
        material={materials.champagneGold}
        rotation={[Math.PI / 2.3, 0, 0]}
      >
        <ringGeometry args={[1.75, 1.765, 48]} />
      </mesh>

      {/* 5. Floating Satellite Markers */}
      <mesh ref={satellite1Ref} material={materials.champagneGold} castShadow>
        <octahedronGeometry args={[0.11, 0]} />
      </mesh>

      <mesh ref={satellite2Ref} material={materials.porcelain} castShadow>
        <dodecahedronGeometry args={[0.09, 0]} />
      </mesh>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Studio Environment & Controlled Lighting                          */
/* ------------------------------------------------------------------ */
function StudioScene({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      <ambientLight intensity={0.65} color="#FFF8ED" />

      {/* Key studio light: balanced shadow map (512x512) for older laptops */}
      <directionalLight
        position={[4, 6, 4]}
        intensity={1.2}
        color="#FFF6E8"
        castShadow
        shadow-mapSize={[512, 512]}
        shadow-camera-near={0.5}
        shadow-camera-far={15}
        shadow-camera-left={-2.5}
        shadow-camera-right={2.5}
        shadow-camera-top={2.5}
        shadow-camera-bottom={-2.5}
      />

      <directionalLight position={[-4, 2, -3]} intensity={0.5} color="#E8EEF5" />
      <pointLight position={[0, -2, 1.5]} intensity={0.3} color="#F2EBDD" />

      <Environment preset="studio" />

      <Float
        speed={reducedMotion ? 0 : 1.4}
        rotationIntensity={reducedMotion ? 0 : 0.2}
        floatIntensity={reducedMotion ? 0 : 0.35}
        floatingRange={[-0.08, 0.08]}
      >
        <AtelierTotem reducedMotion={reducedMotion} />
      </Float>

      {/* Soft contact shadow */}
      <ContactShadows
        position={[0, -1.85, 0]}
        opacity={0.4}
        scale={4.8}
        blur={2.4}
        far={3.2}
        color="#383024"
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

  // Watch for WebGL context loss on older laptop graphics cards
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
    <div className="relative w-full h-full min-h-[350px] sm:min-h-[420px] lg:min-h-[540px]">
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
          <StudioScene reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>

      {/* Atelier discreet interactive annotation */}
      <div
        className="pointer-events-none absolute bottom-3 right-4 hidden sm:flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-[#8B857A]/70"
        aria-hidden="true"
      >
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C4A36B]" />
        <span>INTERACTIVE TOTEM · 3D</span>
      </div>
    </div>
  );
}
