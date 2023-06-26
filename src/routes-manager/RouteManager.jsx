// import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { styled } from 'styled-components';
import Hero from '../pages/Hero/Hero'
import Who from '../pages/Who/Who'
import Works from '../pages/Works/Works'
import Contact from '../pages/Contact/Contact'
import AttributionPage from '../pages/Attribution/AttributionPage';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Portfolio from '../pages/Portfolio/Portfolio';
// import StarBackground from '../components/Stars/StarBackground';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory; 
  scroll-behavior: smooth;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  color: white;
  background: url("../src/assets/images/fixedgradient.jpg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MainContent = styled.div`
  @media (max-width: 1221px) {
    display: none;
  }
`;

export default function RouteManager() {
    return (
        <> 
        <Container>
        <Routes>
            <Route path="/" element={ 
                <>
                    <Hero />
                    <Who />
                    <MainContent>
                      <Works />
                    </MainContent>
                    <Contact />
                </>
            } />
            <Route path="/portfolio" element={
                <>
                    <NavBar heroSectionId="attribution-hero-section" /> 
                    <Portfolio/>
                </>
            }/>
            <Route path="/contact" element={ <Contact /> } />
          <Route path="/attribution" element={
            <>
              <NavBar heroSectionId="attribution-hero-section" />
              <AttributionPage />
            </>
          } />
        </Routes>
        <Footer/>
        </Container>
        {/* <StarBackground/> */}
        </>
    );
}
