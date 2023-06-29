import styled from 'styled-components';

export const Container = styled.div`
 max-width: 100%;
 height: 100%;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 padding: 0 8em;

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

export const Button = styled.button`
  background-color: #A248FF;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 0.8em;
  }

  @media (max-width: 1100px) {
    align-self: center;
  } 
`;

// <<
// @media (max-width: 768px) {
//         padding: 8px;
//         font-size: 0.8em;
//       }
    
//       @media (max-width: 1100px) {
//         align-self: center;
//      } 

// width: 100px;
//     padding: 10px;
//     background-color: #A248FF;
//     color: white;
//     border-color: black;
//     border-radius: 5px; 
//     cursor: pointer;

export const WhatWeDo = styled.div`
 display: flex;
 align-items: center;
 gap: 10px;
`;

export const WhatWeDoTitle = styled.h2`
    color: #A248FF;
`

export const Line = styled.div`
  width: 20px; 
  font-size: 20px;
`;

export const Desc = styled.p`
 font-size: 1em;
 color: lightgray;

 @media (min-width: 1024px) {
    font-size: 1.5em;
 }
`;

export const MidTitle = styled.h2`
 font-size: 1.5em;

 @media (min-width: 1024px) {
    font-size: 2em;
 }
`;
