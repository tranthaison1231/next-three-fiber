"use client";
import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";

function Box() {
  const ref = useRef<MeshProps>(null);

  const rate = 0.01;

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += rate;
      ref.current.rotation.y += rate;
    }
  });
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1, 0.4, 256, 32]} />
      <meshMatcapMaterial color="yellow" />
    </mesh>
  );
}

export default function Home() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <color attach="background" args={["black"]} />
        <Box />
      </Suspense>
    </Canvas>
  );
}
