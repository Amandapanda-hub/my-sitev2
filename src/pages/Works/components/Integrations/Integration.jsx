import React from 'react'
import { OrbitControls, PerspectiveCamera, useTexture, Center } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';
// import Robot_love_death_and_robots from './components/Robot_love_death_and_robots' 
// import Laptop_1 from './components/Laptop_1'
import Iphone from './components/Iphone_14_pro'

export default function Integration({scale=[2.5, 2.5, 2.5]}) {
   
  return (
    <mesh scale={scale}>
        <Center>
            <Iphone/>
            {/* <Laptop_1/> */}
            {/* <Robot_love_death_and_robots/> */}
        </Center>
        <OrbitControls enableZoom={false}/>
    </mesh>
  )
}
