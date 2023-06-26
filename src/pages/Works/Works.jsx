import React, { useState } from 'react'
import {data, Section, Container, Left, List, fillAnimation, ListItem, Right} from './WorkStyles.js'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Cube from '../../components/Cube/Cube.jsx'
import Integration from './components/Integrations/Integration.jsx'
import VersionControl from './components/VersionControl/VersionControl.jsx'
import WebDesign from './components/WebDesign/WebDesign.jsx'

export default function Works() {
  const [work, setWork] = useState("Cube") // start with "Cube"

  const handleWorkChange = (newWork) => {
    setWork(newWork);
  }

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} onClick={() => handleWorkChange(item)}>
                <span className="stroke">{item}</span>
                <span className="fill">{item}</span>
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
        <Canvas>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3, 2, 1]}/>
            {work === "Integration" ? (
              <Integration/>
            ) : work === "Version Control" ? (
              <VersionControl/>
            ) : work === "Web Design" ? (
              <WebDesign/>
            ) : (
              <Cube/>
            )}
        </Canvas>
        </Right>
      </Container>
    </Section>
  )
}
