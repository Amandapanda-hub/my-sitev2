import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
`;

export const ErrorSection = styled.div`
    height: 85vh;
`

export const Loader = styled.img`
    width: 5rem;
    height: auto;
    margin-bottom: -15px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {

  }

`;
//   width: 100px;
//   height: 100px;

export const StyledText = styled.h1`
  color: white;
  font-size: 2rem;
  margin: 20px 0;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const StyledSvg = styled.img`
top: 5px;
width: 30%;
height: auto;
object-fit: contain;
position: relative;

@media screen and (min-width: 320px) and (max-width: 480px) {
    width: 50%;
}

@media screen and (min-width: 600px) and (max-width: 768px) {
    width: 40%;
}
`

export const Button = styled.button`
background-color: #A248FF;
color: white;
font-weight: 500;
width: 120px;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;

@media (max-width: 1100px) {
   align-self: center;
} 
`

