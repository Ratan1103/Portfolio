"use client";

import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { inSphere } from "maath/random";
import * as THREE from "three";

function StarPoints() {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() =>
    inSphere(new Float32Array(7500 * 3), { radius: 1.2 }) as Float32Array
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 12;
      ref.current.rotation.y -= delta / 18;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#c8d8f0"
          size={0.0018}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.75}
        />
      </Points>
    </group>
  );
}

export default function StarsCanvas() {
  return (
    <div className="fixed inset-0 z-[-1] w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarPoints />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
