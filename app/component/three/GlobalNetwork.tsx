"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars } from "@react-three/drei";
import * as THREE from "three";
import Grid from "@mui/material/Grid";

const GlobeScene = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const PURPLE = "#742894";

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <Sphere args={[1, 64, 64]} scale={2.4}>
            <MeshDistortMaterial
              color={PURPLE}
              speed={2}
              distort={0.3}
              wireframe
              opacity={0.4}
              transparent
            />
          </Sphere>
        </mesh>
      </Float>
      {/* Representing global data nodes */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  );
};

const GlobalNetwork = () => (
  <Grid
    container
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
      pointerEvents: "none",
    }}
  >
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#742894" />
      <GlobeScene />
    </Canvas>
  </Grid>
);

export default GlobalNetwork;