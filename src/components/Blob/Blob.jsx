import React, { useState, useEffect } from 'react'
import { MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function Blob() {
  const [windowDimensions, setWindowDimensions] = useState({width: window.innerWidth, height: window.innerHeight});

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({width: window.innerWidth, height: window.innerHeight});
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures effect is only run on mount and unmount

  const scale = Math.min(windowDimensions.width, windowDimensions.height) / 450; // Adjust divisor to get the desired effect

  return (
    <Canvas>
      <OrbitControls enableZoom={false}/>
      <ambientLight intensity={1}/>
      <directionalLight position={[2, 1, 2]}/>
      <Sphere args={[1, 100, 200]} scale={scale}>
        <MeshDistortMaterial color="#020039" attach="material" distort={0.5} speed={2}/>
      </Sphere>
    </Canvas>
  )
}
