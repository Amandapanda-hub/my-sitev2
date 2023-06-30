// import { useState, useEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { styled } from 'styled-components';
import Hero from '../pages/Hero/Hero';
import Who from '../pages/Who/Who';
import Works from '../pages/Works/Works';
import Contact from '../pages/Contact/Contact';
import AttributionPage from '../pages/Attribution/AttributionPage';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Portfolio from '../pages/Portfolio/Portfolio';
import FixedGradientImage from '../assets/images/fixedgradient.jpg';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const Container = styled.div`
  height: 100%;
  scroll-snap-type: y mandatory; 
  scroll-behavior: smooth;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  color: white;
  background: url(${FixedGradientImage});
  &::-webkit-scrollbar {
    display: none;
  }
`;

const RouteSection = styled.div`
  margin: 0 4rem;
`

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
          <Route
            path="/"
            element={
              <>
               <RouteSection>
                <Hero id="hero-section" />
                <Who />
                <MainContent>
                  <Works />
                </MainContent>
                </RouteSection>
                <Contact />
                
              </>
            }
          />
          <Route
            path="/portfolio"
            element={
              <>
               <RouteSection>
                <NavBar />
                <Portfolio />
                </RouteSection>
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/attribution"
            element={
              <>
               <RouteSection>
                <NavBar />
                <AttributionPage />
                </RouteSection>
              </>
            }
          />
          <Route path="*" element={
            <>
            <RouteSection>

                <NotFoundPage />

            </RouteSection>
            </>
            } />
          
        </Routes>       
       
        <Footer />
      </Container>
    </>
  );
}
