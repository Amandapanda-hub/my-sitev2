import React, { useState } from 'react'
import {data, Section, Container, Left, Middle, Right, List, fillAnimation, ListItem, Desc, descData, Box, StyledCanvas, StyledLink, StyledIconLink, StyledAttributionIcon} from './AttributionPageStyles.js'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Integration from '../Works/components/Integrations/Integration.jsx'
import VersionControl from '../Works/components/VersionControl/VersionControl.jsx'
import WebDesign from '../Works/components/WebDesign/WebDesign.jsx'
import Cube from '../../components/Cube/Cube.jsx'

export default function AttributionPage() {
  const [attribution, setAttribution] = useState("Responsiveness") // start with "Cube"

  const handleAttributeChange = (newAttribute) => {
    setAttribution(newAttribute);
  }

  return (
    <>
    <Section id="attribution-section">
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} onClick={() => handleAttributeChange(item)}>
                <span className="stroke">{item}</span>
                <span className="fill">{item}</span>
              </ListItem>
            ))}
          </List>
        </Left>
        <Middle>
        <StyledCanvas id='Canvas-styles'>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3, 2, 1]}/>
            {attribution === "Integration" ? (
              <Integration scale={2.3}/>
            ) : attribution === "Version Control" ? (
              <VersionControl scale={.7}/>
            ) : attribution === "Web Design" ? (
              <WebDesign scale={3.5}/>
            ) : (
              <Cube scale={[0.9]}/>
            )}
        </StyledCanvas>
        </Middle>

        <Right>
          <Box>
          {descData[attribution].map((data, i) => (
              <Desc style={data.style} key={i}>
              {data.link ? (
                <StyledLink href={data.link} target="_blank" rel="noopener noreferrer">
                  {data.text}
                  {data.icon && <StyledAttributionIcon/>}
                </StyledLink>
              ) : (
                <>
                  <div>{data.text}</div>
                  {data.icon && <StyledAttributionIcon/>}
                </>
              )}
            </Desc>
          ))}
          </Box>
        </Right>

      </Container>
      
    </Section>
    </>
  )
}
