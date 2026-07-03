"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import HolographicLogo from "./HolographicLogo";
import NeuralParticles from "./NeuralParticles";

function SceneContent() {
  return (
    <>
      <color attach="background" args={["#ffffff"]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 4, 4]} intensity={0.8} color="#ffffff" />
      <directionalLight position={[-3, -2, 2]} intensity={0.4} color="#7C3AED" />

      <Float speed={1} rotationIntensity={0.15} floatIntensity={0.25}>
        <HolographicLogo />
      </Float>

      <NeuralParticles />
    </>
  );
}

type HeroSceneProps = {
  active?: boolean;
};

export default function HeroScene({ active = true }: HeroSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={1}
      frameloop={active ? "always" : "never"}
      gl={{
        antialias: false,
        alpha: false,
        powerPreference: "high-performance",
        stencil: false,
        depth: true,
      }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
    </Canvas>
  );
}
