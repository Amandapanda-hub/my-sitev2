import styled from 'styled-components';

export const Container = styled.div`
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 2em;

    @media (max-width: 1026px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2rem 2rem;

    }
`

export const Header = styled.h1`
 
`;

export const Section = styled.section`
    
`;

export const MainSection = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;

export const SubHeader = styled.h2`
 
`;

export const Paragraph = styled.p`
 
`;

export const Form = styled.form`
 
`;

export const Input = styled.input`
  
`;

export const Button = styled.button`
  
`;