// import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const twinkle = keyframes`
  0% {
    opacity: 0;
    box-shadow: 0 0 30px #ffffff;
  }
  50% {
    opacity: 1;
    box-shadow: 0 0 30px #ffffff, 0 0 50px #ffffff;
  }
  100% {
    opacity: 0;
    box-shadow: 0 0 30px #ffffff;
  }
`;

const StarDiv = styled.div`
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: ${twinkle} infinite linear;
`;

function Star() {
  const top = Math.random() * window.innerHeight;
  const left = Math.random() * window.innerWidth;
  const duration = Math.random() * 3 + 4;
  const size = Math.random() * 2;

  return (
    <StarDiv style={{
      top: `${top}px`,
      left: `${left}px`,
      animationDuration: `${duration}s`,
      width: `${size}px`,
      height: `${size}px`
    }} />
  );
}

function StarBackground() {
  const starCount = 100; // adjust this number to increase or decrease the number of stars
  const stars = Array(starCount).fill(null);
  
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: 'none'}}>
      {stars.map((_, index) => (
        <Star key={index} />
      ))}
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
    body::before {
      content: "";
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-color: black;
    }

  a {
    color: inherit; 
    text-decoration: none; 

    &:visited {
      color: inherit;
    }

    &:active {
      color: inherit;
    }
  }

  li { 
    color: inherit;
    text-decoration: none;

    &:hover {
        color: #A248FF; 
    }
  }
`;

const GlobalStyleWithBackground = ({children}) => {
  return (
    <>
      <GlobalStyle />
      <StarBackground />
      {children}
    </>
  );
}

GlobalStyleWithBackground.propTypes = {
  children: PropTypes.node,
};


export default GlobalStyleWithBackground;
