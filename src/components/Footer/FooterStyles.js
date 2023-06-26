import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import {BiMessageDetail} from 'react-icons/bi'
import {BiBookHeart} from 'react-icons/bi'

export const Section = styled.div`
    display: flex;
    justify-content: center;
    scroll-snap-align: center;
    background-image: linear-gradient(to bottom, rgba(0, 0, 10, 0.05) 0%, rgba(0, 0, 10, 1) 100%);
 `;

 export const Container = styled.div`
    width: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0px;
    margin-left: 6rem;
    
    @media (max-width: 1110px) {
        flex-direction: column;
        align-items: flex-start;
    }

    @media (max-width: 960px) {
        max-width: 80%;
        height: auto;
        justify-content: flex-end;

    }
 `; 

 export const Logo = styled.img`
    height: 13rem;
    width: auto ;

    @media (min-width: 1110px) {
        max-width: 80%;
        height: auto;
        justify-content: flex-end;

    }

    @media (max-width: 960px) {
        max-width: 80%;
        height: auto;
        justify-content: flex-end;

    }
`;

 export const Links = styled.div`
     display: flex;
     align-items: center;

     @media (min-width: 768px) {
        align-items: flex-start;
    }
 `; 

 export const List = styled.ul`
     display: flex;
     gap: 100px;
     list-style: none;
     

    @media (min-width: 1110px) {
      align-items: center;
      }

      @media (max-width: 960px) {
        flex-direction: column;
      }
 `;
 
export const ListItem = styled.li`
     margin-right: 100px;
     
   &:last-child {
     margin-right: 0;
   }

   @media (max-width: ${({ hideOnMobile }) => hideOnMobile ? '990px' : 'none'}) {
    display: none;
  }
 `; 

 export const StyledHomeIcon = styled(AiOutlineHome)`
    font-size: 20px;
    margin-right: 10px;
`;

export const StyledWorkIcon = styled(MdWorkOutline)`
    font-size: 20px;
    margin-right: 10px;
`

export const StyledContactIcon = styled(BiMessageDetail)`
    font-size: 20px;
    margin-right: 10px;
    transform: scaleX(-1);
    
`

export const StyledAttributionIcon = styled(BiBookHeart)`
    font-size: 20px;
    margin-right: 10px; 
`

export const LogoBox = styled.div`
display: flex;
width: 100%;
height: auto;
justify-content: center;

@media (max-width: 960px) {
    justify-content: flex-end;

}

@media (max-width: 1110px) {
    justify-content: flex-end;
}
`;

export const StyledLink = styled(RouterLink)`
    
`;
