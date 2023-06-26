import React from 'react'
import { MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function Blob() {
  return (
                <Canvas>
                    <OrbitControls enableZoom={false}/>
                    <ambientLight intensity={1}/>
                    <directionalLight position={[2, 1, 2]}/>
                    <Sphere args={[1, 100, 200]} scale={2.4}>
                        <MeshDistortMaterial color="#020039" attach="material" distort={0.5} speed={2}/>
                    </Sphere>
               </Canvas>
  )
}
