import styled from 'styled-components';
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import {BiMessageDetail} from 'react-icons/bi'
import {BiBookHeart} from 'react-icons/bi'
import { FaBars, FaTimes } from 'react-icons/fa';

export const StyledMenuIcon = styled(FaBars)`
  font-size: 5vw;
`;

export const StyledCloseIcon = styled(FaTimes)`
  font-size: 5vw;
  position: absolute; 
  top: 5rem;
  right: 0rem;
  z-index: 1001;
  `;

  export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: -2rem;
  right: 0;
  font-size: 2.5vw;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.872);
  padding-top: 2rem;
  z-index: 1000; 
  transition: transform 0.3s ease-in-out; 
  transform: ${({ isMenuOpen }) => (isMenuOpen ? 'translateX(0)' : 'translateX(100%)')}; 

  
 `;


export const StyledSearchIcon = styled(AiOutlineSearch)`
    font-size: 30px;
    padding-right: 20px;

    @media (max-width: 990px) {
      display: none;
    }
`;

export const StyledHomeIcon = styled(AiOutlineHome)`
    font-size: 20px;
    margin-left: 10px;
`;

export const StyledWorkIcon = styled(MdWorkOutline)`
    font-size: 20px;
    margin-left: 10px;
`

export const StyledContactIcon = styled(BiMessageDetail)`
    font-size: 20px;
    margin-left: 10px;
    transform: scaleX(-1);
`

export const StyledAttributionIcon = styled(BiBookHeart)`
    font-size: 20px;
    margin-left: 10px; 
`

export const Section = styled.div`
display: flex;
justify-content: center;
position: sticky; 
top: 0; 
z-index: 100;
width: 100%;


@media (max-width: 990px) {
    top: 1rem;
}

`;

export const Container = styled.div`
   width: 100%;
   max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;


  @media (max-width: 600px ) and (max-width: 990px ) {
    
  }

  @media (max-width:1240px) {
    width: 100%;
    padding: 0 20px;
  }

  @media (min-width: 992px) {
    padding: 0 15px;
  }

  @media (min-width: 1200px) {
    padding: 0 30px;
  }


`;


export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  gap: ${({ isMobileView }) => isMobileView ? '0' : '50px'};

`;

export const Icon = styled.div`
    width: 20px;
    cursor: pointer;


`;

export const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    
`;

export const Logo = styled.img`
    height: 10rem;


    @media (max-width: 600px ) and (max-width: 990px ) {
      height: 8rem;
    }
    

`;

export const List = styled.ul`
display: flex;
justify-content: center;
align-items: center;
list-style: none;

${({ isMobileView }) => isMobileView ? `
  flex-direction: column;
  gap: 40px;
` : `
  flex-direction: row;
  gap: 30px;
`}

`;

export const ListItem = styled.li`
    cursor: pointer;

    @media (max-width: ${({ hideOnMobile }) => hideOnMobile ? '990px' : 'none'}) {
      display: none;
    }

`;
