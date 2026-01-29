"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, PerspectiveCamera, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const FloatingProduct = ({ position, color, speed, args }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={args} />
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={0.2}
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
};

const ConsumerGoodsBackground = () => {
  const PURPLE = "#742894";
  
  // Create a randomized set of "products"
  const items = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5,
      ] as [number, number, number],
      args: [Math.random() * 1 + 0.5, Math.random() * 1.5 + 0.5, Math.random() * 1 + 0.2] as [number, number, number],
      speed: Math.random() * 2 + 1,
    }));
  }, []);

  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color={PURPLE} />
        
        <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        
        {items.map((item, i) => (
          <FloatingProduct key={i} {...item} color={PURPLE} />
        ))}
      </Canvas>
      {/* Gradient overlay for text clarity */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        background: 'radial-gradient(circle at center, rgba(30,30,30,0.7) 0%, rgba(30,30,30,1) 100%)',
        pointerEvents: 'none'
      }} />
    </div>
  );
};

export default ConsumerGoodsBackground;