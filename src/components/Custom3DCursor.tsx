import { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  type Group,
  type Mesh,
} from 'three';

/* ------------------------------------------------------------------ */
/*  Helper to check WebGL availability                                */
/* ------------------------------------------------------------------ */
function canUseWebGL(): boolean {
  if (typeof window === 'undefined') return false;
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
/*  Inner 3D Cursor Scene with real geometry, physics & lighting      */
/* ------------------------------------------------------------------ */
interface CursorMeshProps {
  targetPos: { x: number; y: number };
  isHovering: boolean;
  isPressed: boolean;
  isVisible: boolean;
}

function CursorScene({ targetPos, isHovering, isPressed, isVisible }: CursorMeshProps) {
  const groupRef = useRef<Group>(null!);
  const sphereRef = useRef<Mesh>(null!);
  const ringRef = useRef<Mesh>(null!);
  const satelliteRef = useRef<Mesh>(null!);

  // Current interpolated coordinates in screen-centered world units
  const currentPos = useRef({ x: 0, y: 0 });
  const currentScale = useRef(0);

  // Materials with physical refraction, reflection and sheen
  const materials = useMemo(() => {
    return {
      // 1. Translucent Emerald Glass Sphere Core
      emeraldGlass: new MeshPhysicalMaterial({
        color: '#1A583E',
        metalness: 0.12,
        roughness: 0.1,
        transmission: 0.85,
        thickness: 18,
        ior: 1.54,
        attenuationColor: '#174D38',
        attenuationDistance: 14,
        clearcoat: 1.0,
        clearcoatRoughness: 0.04,
        sheen: 0.9,
        sheenColor: '#D5F2A3',
        transparent: true,
        opacity: 0.94,
      }),
      // 2. Polished Warm Gold Gyroscopic Ring
      warmGold: new MeshStandardMaterial({
        color: '#E8B86D',
        metalness: 0.96,
        roughness: 0.05,
      }),
      // 3. Polished Chrome Orbiting Satellite Ring
      chromeSatellite: new MeshStandardMaterial({
        color: '#FFFFFF',
        metalness: 0.98,
        roughness: 0.03,
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
    if (!groupRef.current) return;

    const { size } = state;
    // Map screen pixel coordinates (0 to width, 0 to height) to orthographic world space (-w/2 to +w/2, +h/2 to -h/2)
    const targetWorldX = targetPos.x - size.width / 2;
    const targetWorldY = -(targetPos.y - size.height / 2);

    // Smooth fluid pointer tracking with inertia
    const lerpRate = Math.min(delta * 14, 0.22);
    currentPos.current.x += (targetWorldX - currentPos.current.x) * lerpRate;
    currentPos.current.y += (targetWorldY - currentPos.current.y) * lerpRate;

    // Pointer velocity calculation for directional 3D tilt & roll
    const vx = targetWorldX - currentPos.current.x;
    const vy = targetWorldY - currentPos.current.y;

    // Interactive scale morphing
    const baseScale = isPressed ? 0.78 : isHovering ? 1.65 : 1.0;
    const targetVisibility = isVisible ? baseScale : 0.001;
    currentScale.current += (targetVisibility - currentScale.current) * Math.min(delta * 12, 0.2);

    // Update group transform
    groupRef.current.position.x = currentPos.current.x;
    groupRef.current.position.y = currentPos.current.y;
    groupRef.current.position.z = isHovering ? 25 : Math.sin(state.clock.elapsedTime * 2.8) * 4;
    groupRef.current.scale.setScalar(Math.max(currentScale.current, 0.001));

    // Dynamic 3D tilt responding to motion velocity
    groupRef.current.rotation.y = vx * 0.012;
    groupRef.current.rotation.x = -vy * 0.012;

    const t = state.clock.elapsedTime;

    // Organic continuous rotation of the emerald sphere
    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.4 + currentPos.current.x * 0.002;
      sphereRef.current.rotation.x = t * 0.25 - currentPos.current.y * 0.002;
    }

    // Outer warm-gold gyroscopic ring counter-orbit
    if (ringRef.current) {
      const ringSpin = isHovering ? 2.4 : 1.0;
      ringRef.current.rotation.z = -t * 0.6 * ringSpin;
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.8) * 0.2;
    }

    // Secondary chrome satellite orbit
    if (satelliteRef.current) {
      satelliteRef.current.rotation.y = t * 0.85;
      satelliteRef.current.rotation.z = Math.PI / 4 + Math.cos(t * 0.6) * 0.25;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 1. Central 3D Translucent Emerald Glass Orb */}
      <mesh
        ref={sphereRef}
        material={materials.emeraldGlass}
      >
        <sphereGeometry args={[13, 28, 28]} />
      </mesh>

      {/* 2. Primary Gyroscopic Warm Gold Metallic Ring */}
      <mesh
        ref={ringRef}
        material={materials.warmGold}
        rotation={[Math.PI / 3, 0, Math.PI / 6]}
      >
        <torusGeometry args={[20, 1.2, 16, 48]} />
      </mesh>

      {/* 3. Secondary Liquid Chrome Satellite Ring */}
      <mesh
        ref={satelliteRef}
        material={materials.chromeSatellite}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      >
        <torusGeometry args={[17, 0.8, 14, 40]} />
      </mesh>

      {/* 4. Soft Inner Sage Point Light radiating through the emerald glass */}
      <pointLight position={[0, 0, 0]} intensity={isHovering ? 3.2 : 2.0} color="#D5F2A3" distance={60} />
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Studio Lighting Rig for the 3D Cursor Scene                       */
/* ------------------------------------------------------------------ */
function CursorLighting() {
  return (
    <>
      <ambientLight intensity={1.2} color="#F8F7F2" />
      <directionalLight position={[150, 250, 300]} intensity={2.8} color="#FFFFFF" />
      <directionalLight position={[-150, -150, 200]} intensity={1.8} color="#D5F2A3" />
      <directionalLight position={[0, 100, -100]} intensity={1.2} color="#E8B86D" />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Exported Master 3D Cursor Component                               */
/* ------------------------------------------------------------------ */
export default function Custom3DCursor() {
  const [targetPos, setTargetPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [enabled] = useState(() => {
    if (typeof window === 'undefined') return false;
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches && window.matchMedia('(hover: hover)').matches;
    return hasFinePointer && canUseWebGL();
  });

  useEffect(() => {
    if (!enabled) return;

    const onPointerMove = (e: PointerEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check whether user is hovering over any interactive elements
      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest(
        'a, button, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"]), .interactive, [data-cursor-interactive]'
      );
      setIsHovering(interactive);
    };

    const onPointerDown = () => setIsPressed(true);
    const onPointerUp = () => setIsPressed(false);
    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => {
      setIsVisible(false);
      setIsHovering(false);
      setIsPressed(false);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [enabled]);

  // Gracefully omit on touch devices or non-WebGL clients
  if (!enabled) return null;

  return (
    <>
      {/* 1. Precision Center Focal Dot (Guarantees 100% click & targeting accuracy) */}
      <div
        className="fixed pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-200"
        style={{
          left: targetPos.x,
          top: targetPos.y,
          width: isHovering ? '6px' : '4px',
          height: isHovering ? '6px' : '4px',
          backgroundColor: isHovering ? '#174D38' : '#174D38',
          border: isHovering ? '1.5px solid #D5F2A3' : '1px solid rgba(213, 242, 163, 0.9)',
          boxShadow: isHovering
            ? '0 0 10px rgba(213, 242, 163, 0.9), 0 0 4px rgba(23, 77, 56, 0.4)'
            : '0 0 4px rgba(23, 77, 56, 0.35)',
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* 2. Genuine Three.js Full-Viewport WebGL 3D Cursor Canvas */}
      <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
        <Canvas
          orthographic
          camera={{
            position: [0, 0, 400],
            zoom: 1,
            near: 0.1,
            far: 1000,
          }}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance',
          }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
        >
          <CursorLighting />
          <CursorScene
            targetPos={targetPos}
            isHovering={isHovering}
            isPressed={isPressed}
            isVisible={isVisible}
          />
        </Canvas>
      </div>
    </>
  );
}
