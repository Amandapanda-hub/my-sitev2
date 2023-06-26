import React from 'react'
// import styled from 'styled-components'
import NavBar from '../../components/NavBar/NavBar'
import {AiOutlineArrowRight} from "react-icons/ai"
import { Section, Container, Left, Title, WhatWeDo, Line, Subtitle, Desc, Button, Right, Img, Lang } from './HeroStyles.js';
import Blob from '../../components/Blob/Blob';


export default function Hero() {
  return (
    <Section id='hero-section'>
        <NavBar/>
        <Container>
            <Left>
                <Title>Coding. Constellations. Charted.</Title>
                <WhatWeDo>
                    <Line>
                        <AiOutlineArrowRight/>
                    </Line>
                    <Subtitle>What I Do</Subtitle>
                </WhatWeDo>
                <Desc>Exploring an interstellar journey, charting the vast universe of programming languages, cutting-edge algorithms, and pioneering software innovation. Discovering the beauty of code.</Desc>
                <Lang>HTML, CSS, JavaScript, NodeJS, REACT, Express .... </Lang>
                <Button>Learn More</Button>
            </Left>
            <Right>
                {/* 3d MODEL */}
                <Blob/>
                <Img src="../src/assets/images/veryroundedpersonalselfie.png"/>
            </Right>
        </Container>
    </Section>
  )
}

