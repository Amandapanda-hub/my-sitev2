import { HashLink as Link } from 'react-router-hash-link';
import NavBar from '../../components/NavBar/NavBar'
import {AiOutlineArrowRight} from "react-icons/ai"
import { Section, Left, Title, Right, Img, Lang } from './HeroStyles.js';
import { Button, WhatWeDoTitle, WhatWeDo, Line, Desc, Container } from '../../GlobalComponents.js'
import Blob from '../../components/Blob/Blob';
import VeryRoundedPersonalSelfie from '../../assets/images/smallerfile-veryroundedpersonalselfie.webp'


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
                    <WhatWeDoTitle>What I Do</WhatWeDoTitle>
                </WhatWeDo>
                <Desc>Exploring an interstellar journey, charting the vast universe of programming languages, cutting-edge algorithms, and pioneering software innovation. Discovering the beauty of code.</Desc>
                <Lang>HTML, CSS, JavaScript, NodeJS, REACT, Express .... </Lang>
                <Link to='/Learn-More'>
                <Button>Learn More</Button>
                </Link>
            </Left>
            <Right>
                {/* 3d MODEL */}
                <Blob/>
                <Img src={VeryRoundedPersonalSelfie} alt="Personal Selfie" />
            </Right>
        </Container>
    </Section>
  )
}
