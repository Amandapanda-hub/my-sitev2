import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 100vh;
position: relative;
top: 50%;
left: 50%;
transform: translate(-50%, -35%);

@media (max-width: 768px) {
    transform: translate(-50%, -20%);
}

@media (max-width: 650px) {
    transform: translate(-50%, -10%); 
}

@media (min-width: 740px-850px) {
    transform: translate(-50%, -20%); 
}
`;

export const Loader = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    transform: translate(-50%, -20%); 
    width: 70px;
    height: 70px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }

`;

export const StyledText = styled.h1`
  color: white;
  font-size: 2rem;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const StyledSvg = styled.img`
top: 5px;
width: 30%;
height: auto;
object-fit: contain;
position: relative;
`


// export const StyledRobot = styled.img`
//   width: 200px;
//   height: 200px;
// `;