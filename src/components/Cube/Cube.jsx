import React from 'react';
import { PerspectiveCamera, useTexture } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';


export default function Cube({ scale = 1 }) {
  const texture = useTexture('../src/assets/textures/purplepinkcode.png'); 

  return (
    <mesh scale={[scale, scale, scale]}>
      <boxGeometry args={[2.5 * scale, 2.5 * scale, 2.5 * scale]} />
      <meshStandardMaterial map={texture} />
      <PerspectiveCamera makeDefault position={[0,0,7]}/>   {/* << this may be unnessassary */}
    </mesh>
  );
}