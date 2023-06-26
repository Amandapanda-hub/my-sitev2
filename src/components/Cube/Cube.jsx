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




















// import React, { useMemo, useRef } from 'react'
// import { TextureLoader, FontLoader, RepeatWrapping } from 'three'
// import { useLoader } from '@react-three/fiber'
// import { Text } from 'troika-three-text'
// import helvetiker from 'three/examples/fonts/helvetiker_regular.typeface.json'

// export default function Cube() {
//   const texture = useLoader(TextureLoader, '../src/assets/textures/purplepinkcode.png')
//   texture.wrapS = texture.wrapT = RepeatWrapping

//   const font = new FontLoader().parse(helvetiker)

//   const textRef = useRef()

//   useMemo(() => {
//     const textMesh = new Text()
//     textMesh.text = 'Hello' // Your text
//     textMesh.font = font
//     textMesh.fontSize = 0.2
//     textMesh.color = 0xff9900 // Color of the text
//     textMesh.position.z = 1.5 // Position of the text (aligned with the cube's face)
//     textMesh.sync() // Update the underlying geometry right away
//     textRef.current = textMesh
//   }, [font])

//   return (
//     <group>
//       <mesh>
//         <boxGeometry args={[3, 3, 3]} />
//         <meshStandardMaterial map={texture} />
//       </mesh>
//       <primitive object={textRef.current} />
//     </group>
//   )
// }



















// ---------------------------------------------------------------------------------------------

// import React, { useRef } from 'react'
// import { PerspectiveCamera, RenderTexture } from '@react-three/drei'
// // import { useFrame } from '@react-three/fiber'

// export default function Cube() {
//     const textureLoader = new THREE.TextureLoader(); //create a new texture loader instance

//     const textureCube = textureLoader.load("../../textures/greencode.png")
//   return (
//     <mesh>
//     <boxGeometry args={[3,3,3]}/>
//     <meshStandardMaterial> 
//     <RenderTexture attach="map">
//         <PerspectiveCamera makeDefault position={[0, 0, 2]}/>
//         <color attach="background" args={["white"]}/>
//         {/* <Text ref={textRef} fontSize={1} color="#555">
//             Hello
//         </Text> */}
//     </RenderTexture>
//     </meshStandardMaterial> 
// </mesh>
//   )
// }
