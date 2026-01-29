"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Sphere,
  Line,
  Float,
  OrbitControls,
  Stars,
} from "@react-three/drei";
import * as THREE from "three";
import Grid from "@mui/material/Grid";

const PURPLE = "#742894";

/* Moving shipment dots */
const MovingNode = ({ radius = 3, speed = 0.5 }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
    }
  });

  return (
    <mesh ref={ref}>
      <Sphere args={[0.06, 16, 16]}>
        <meshStandardMaterial color={PURPLE} />
      </Sphere>
    </mesh>
  );
};

/* Circular transport route */
const RouteRing = ({ radius }: { radius: number }) => (
  <Line
    points={Array.from({ length: 64 }, (_, i) => {
      const angle = (i / 64) * Math.PI * 2;
      return [
        Math.cos(angle) * radius,
        0,
        Math.sin(angle) * radius,
      ];
    })}
    color={PURPLE}
    lineWidth={0.6}
    transparent
    opacity={0.35}
  />
);

const LogisticsScene = () => {
  const hubRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (hubRef.current) {
      hubRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <>
      {/* Central warehouse / hub */}
      <Float floatIntensity={0.4}>
        <mesh ref={hubRef}>
          <Sphere args={[0.8, 32, 32]}>
            <meshStandardMaterial
              color={PURPLE}
              emissive={PURPLE}
              emissiveIntensity={0.2}
              roughness={0.4}
            />
          </Sphere>
        </mesh>
      </Float>

      {/* Transport routes */}
      <RouteRing radius={2.2} />
      <RouteRing radius={3.2} />
      <RouteRing radius={4.2} />

      {/* Moving shipments */}
      <MovingNode radius={2.2} speed={0.6} />
      <MovingNode radius={3.2} speed={0.45} />
      <MovingNode radius={4.2} speed={0.3} />

      {/* Background stars (global scale) */}
      <Stars
        radius={80}
        depth={40}
        count={3000}
        factor={3}
        fade
        speed={0.4}
      />
    </>
  );
};

const LogisticsNetwork = () => (
  <Grid
    container
    sx={{
      position: "absolute",
      inset: 0,
      zIndex: 0,
      pointerEvents: "none",
    }}
  >
    <Canvas camera={{ position: [0, 3, 8], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <LogisticsScene />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  </Grid>
);

export default LogisticsNetwork;
