import styled from 'styled-components';
import { ReactComponent as SpaceshipSvg } from '../../assets/SVG/spacelaunch.svg';

export const StyledSvg = styled(SpaceshipSvg)`
width: 60%;
height: auto;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
z-index: 2;

@media (min-width: 1024px) {
    animation: animate 2s infinite ease alternate;
  }
  
  @keyframes animate {
    to{
      transform: translateY(20px);
    }
  }

  @media (max-width: 768px) {
    max-width: 80vw;
    max-height: 80vh;
  }
  
  @media (max-width: 480px) {
    max-width: 90vw;
    max-height: 90vh;
  }

  @media (max-width: 1023px) {

  }

`;
// <<<<
// padding-top: 12rem;
//     padding-bottom: 0;
//     margin-bottom: -10rem;
//     width: 300px;
//     height: 300px;
//     left: 50% auto;
//     animation: none;
//   }

//   @media (max-width: 500px) {
//     width: 250px;
//   }

export const Section = styled.div`
 height: 100vh;
 display: flex;
 justify-content: space-between;
 scroll-snap-align: center;
 flex-direction: column;
`;

export const Container = styled.div`
 height: 100%;
 max-width: 100%;
 display: flex;
 justify-content: space-between;
 flex-direction: row;
 flex-wrap: wrap;

 @media (max-width: 1026px) {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem 2rem;
}

@media (max-width: 1100px) {
  margin: 0 2rem 0 ;
} 
`;

export const Left = styled.div`
 width: 50%;
 position: relative;
 


@media (max-width: 1030px) {
  width: fit-content;
 }

 @media (min-width: 1024px) {
  
 }
`;
// <<<
// display: flex;
//  flex-direction: column;
//  justify-content: center;

export const Right = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;

@media (min-width: 1024px) {
   
}

@media (max-width: 1023px) {
  width: 100%;
}

@media (min-width: 1023px) {
   
}
`;

export const Title = styled.h1`
 font-size: 2em;

 @media (min-width: 1024px) {
    font-size: 3em;
 }
`;

// export const Subtitle = styled.h2`
//  font-size: 1.5em;

//  @media (min-width: 1024px) {
//     font-size: 2em;
//  }
// `;

// export const WhatWeDo = styled.div`
//  display: flex;
//  align-items: center;
//  gap: 10px;
// `;

// export const Line = styled.div`
//  width: 20px; 
//  font-size: 20px;
// `;

// export const Smalltitle = styled.h2`
//  color: #A248FF;
// `;

// export const Desc = styled.p`
//  font-size: 1em;
//  color: lightgray;

//  @media (min-width: 1024px) {
//     font-size: 1.5em;
//  }
// `;

// export const Button = styled.button`
//  background-color: #A248FF;
//  color: white;
//  font-weight: 500;
//  width: 120px;
//  padding: 10px;
//  border: none;
//  border-radius: 5px;
//  cursor: pointer;

//  @media (max-width: 1100px) {
//     align-self: center;
//  } 
// `;