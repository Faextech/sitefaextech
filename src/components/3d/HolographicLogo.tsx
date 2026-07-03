"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const frameMatOuter = new THREE.MeshStandardMaterial({
  color: "#0D2A56",
  emissive: "#1E5BAA",
  emissiveIntensity: 0.3,
  metalness: 0.7,
  roughness: 0.35,
});

const frameMatInner = new THREE.MeshStandardMaterial({
  color: "#1E5BAA",
  emissive: "#7C3AED",
  emissiveIntensity: 0.4,
  metalness: 0.7,
  roughness: 0.35,
});

const coreMat = new THREE.MeshStandardMaterial({
  color: "#FF5A1F",
  emissive: "#FF5A1F",
  emissiveIntensity: 0.9,
  metalness: 0.5,
  roughness: 0.3,
});

function FrameRing({
  size,
  thickness,
  gap,
  material,
  z = 0,
}: {
  size: number;
  thickness: number;
  gap: number;
  material: THREE.MeshStandardMaterial;
  z?: number;
}) {
  const half = size / 2;
  const inner = half - thickness;

  return (
    <group position={[0, 0, z]}>
      <mesh position={[0, half - thickness / 2, 0]} scale={[size - gap, thickness, thickness]} material={material}>
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
      <mesh position={[0, -half + thickness / 2, 0]} scale={[size - gap, thickness, thickness]} material={material}>
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
      <mesh position={[-half + thickness / 2, 0, 0]} scale={[thickness, size - gap * 2, thickness]} material={material}>
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
      <mesh position={[half - thickness / 2, inner * 0.15, 0]} scale={[thickness, inner * 0.7, thickness]} material={material}>
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
    </group>
  );
}

export default function HolographicLogo() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t * 0.25) * 0.12;
    groupRef.current.rotation.x = Math.cos(t * 0.18) * 0.06;
    groupRef.current.position.y = Math.sin(t * 0.4) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <FrameRing size={3.2} thickness={0.18} gap={0.5} material={frameMatOuter} />
      <FrameRing size={2.4} thickness={0.12} gap={0.4} material={frameMatInner} z={0.12} />
      <mesh position={[0, 0, 0.28]} material={coreMat}>
        <boxGeometry args={[1.1, 1.1, 0.3]} />
      </mesh>
      <mesh position={[0.72, 0, 0.28]} material={coreMat}>
        <boxGeometry args={[0.32, 0.32, 0.32]} />
      </mesh>
      <pointLight position={[0, 0, 2]} intensity={1.2} color="#FF5A1F" distance={5} />
      <pointLight position={[-2, 2, 1]} intensity={0.6} color="#7C3AED" distance={6} />
    </group>
  );
}
