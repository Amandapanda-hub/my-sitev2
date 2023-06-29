import styled from 'styled-components';

export const Button = styled.button`
  background-color: #A248FF;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

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