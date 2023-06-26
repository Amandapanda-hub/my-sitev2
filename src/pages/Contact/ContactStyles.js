import styled from 'styled-components'
import { FaRegPaperPlane } from 'react-icons/fa'; // Add this line


export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 0 20px;

  @media (max-width: 1110px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 1110px) {
    justify-content: center;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-weight: 200;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 767px) {
    width: 50%;
    padding: 0 10px;
  }
`;

export const Input = styled.input`
  padding: 20px;
  background-color: light-grey;
  border: none;
  border-radius: 5px;

  @media (max-width: 767px) {
  }
`;

export const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: light-grey;

  @media (max-width: 767px) {
  }
`;

export const Button = styled.button`
  background-color: #A248FF;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  
  @media (max-width: 767px) {
  }
`;

export const Right = styled.div`
  flex: 1;
  
  @media (max-width: 1110px) {
    display: none;
  }
`;

export const StyledPaperPlane = styled(FaRegPaperPlane)`
  margin-left: 10px;
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;