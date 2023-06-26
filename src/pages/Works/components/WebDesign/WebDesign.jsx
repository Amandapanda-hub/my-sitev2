import React from 'react'
import { OrbitControls, Center } from '@react-three/drei';
// import Abstract_design from './components/Abstract_design'
import Laptop from './components/Laptop_1'

export default function WebDesign({ scale = [4, 4, 4] }) {
  return (
    <mesh scale={scale}>
        <Center>
          <Laptop/>
        </Center>
        <OrbitControls enableZoom={false}/>
    </mesh>
  )
}
