import React from 'react'
import { OrbitControls, Center } from '@react-three/drei';
// import Ps5_controller from './components/Ps5_controller' 
import React_logo from './components/React_logo'

export default function VersionControl({scale=[.8, .8, .8]}) {
  return (
    <mesh scale={scale}>
        <Center>
        {/* <Ps5_controller/> */}
        <React_logo/>
        </Center>
        <OrbitControls enableZoom={false}/>
    </mesh>
  )
}
