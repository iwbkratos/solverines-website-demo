"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars, Sparkles, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

const DigitalChassis = () => {
  const groupRef = useRef<THREE.Group>(null);
  const PURPLE = "#742894";
  const WHITE = "#FFFFFF";
  useFrame((state) => {
    if (groupRef.current) {
      // Elegant floating and slight rotation
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Abstract Wireframe Car Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4.2, 0.7, 1.8]} />
        <MeshDistortMaterial color={WHITE} speed={2} distort={0.1} wireframe opacity={0.6} transparent />
      </mesh>
      {/* Upper Cabin */}
      <mesh position={[-0.2, 0.6, 0]}>
        <boxGeometry args={[2, 0.6, 1.4]} />
        <MeshDistortMaterial color={WHITE} wireframe opacity={0.3} transparent />
      </mesh>
      {/* Glowing Axles/Wheels */}
      {[-1.5, 1.5].map((x) => [-0.9, 0.9].map((z) => (
        <mesh key={`${x}-${z}`} position={[x, -0.4, z]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.2, 16]} />
          <meshBasicMaterial color={PURPLE} wireframe />
        </mesh>
      )))}
    </group>
  );
};

const VehicleBackground = () => (
  <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 1, 6]} fov={50} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#742894" />
      
      {/* The "Data Tunnel" Effect */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1.5} />
      <Sparkles count={150} scale={[15, 10, 15]} size={2} speed={0.4} color="#742894" />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <DigitalChassis />
      </Float>
    </Canvas>
    {/* Dark Overlay to ensure text readability */}
    <div style={{
      position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
      background: 'linear-gradient(to right, rgba(30,30,30,0.9) 30%, rgba(30,30,30,0.4) 100%)',
      pointerEvents: 'none'
    }} />
  </div>
);

export default VehicleBackground;