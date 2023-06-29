import styled from 'styled-components';

export const Section = styled.div`
 height: 100vh;
 scroll-snap-align: center;
 display: flex;
 align-items: center;
 justify-content: space-between;
 flex-direction: column;
`;

// export const Container = styled.div`
//  max-width: 100%;
//  height: 100%;
//  display: flex;
//  flex-direction: row;
//  justify-content: space-between;
//  padding: 0 8em;

//  @media (max-width: 1026px) {
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     padding: 0 2rem 2rem;
//   }

//   @media (max-width: 1100px) {
//     margin: 0 2rem 0 ;
//  } 
// `;

export const Right = styled.div`
 width: 50%;
 position: relative;
 
 @media (max-width: 1023px) {
    display: none;
  }
`;

export const Left = styled.div`
 width: 50%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 gap: 20px;
 padding: 2em;

 @media (max-width: 1030px) {
   padding: 1em;
   width: fit-content;
  }

`;

export const Title = styled.h1`
 font-size: 4em;

 @media (max-width: 1030px) {
    font-size: 2.5em;
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

export const Lang = styled.p `
    font-size: 1.2em;
    margin-left: 20px;
    letter-spacing: 1.5px;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 1em;
      }
`

export const Img = styled.img`
 width: 100%;
 max-width: 60vw;
 max-height: 60vh;
 object-fit: contain;
 position: absolute;
 top: 0;
 bottom: 5rem;
 left: 0;
 right: 0;
 margin: auto;
 z-index: 2;

 animation: animate 2s infinite ease alternate;
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
`;
