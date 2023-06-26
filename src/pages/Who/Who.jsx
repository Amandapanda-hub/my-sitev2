import React from 'react'
// import styled from 'styled-components'
import {AiOutlineArrowRight} from "react-icons/ai"
import { StyledSvg, Section, Container, Left, Title, Subtitle, Right, WhatWeDo, Line, Smalltitle, Desc, Button } from './WhoStyles.js';


export default function Who() {
  return (
    <Section>
        <Container>
            <Left>
                {/* 3d MODEL */}
                {/* <Img src="../src/assets/images/veryroundedpersonalselfie.png"/> */}
               <StyledSvg/>
            </Left>
            <Right>
                <Title>Software Chronicles: </Title>
                <Subtitle>Unraveling the Developer's Journey.</Subtitle>
                <WhatWeDo>
                    <Line>
                        <AiOutlineArrowRight/>
                    </Line>
                    <Smalltitle>Who I Am</Smalltitle>
                </WhatWeDo>
                <Desc>Soaring through the expanses of programming, navigating galaxies of languages to shape digital worlds.</Desc>
                <Button>See My Work</Button>
            </Right>
        </Container>
    </Section>
  )
}
