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

 @media (max-width: 990px) {
   margin: auto; 
   padding: 0px 0px;
}

 @media (max-width: 960px) {
     flex-direction: column;
     justify-content: center;
     align-items: center;
 }
 
 @media (max-width: 414px) {
     flex-direction: row;
     align-items: flex-start;
    
 }
 `; 
//  @media (max-width: 360px) and (max-width: 990px ) {
//   margin: auto;
// }  

 export const Logo = styled.img`
 height: 10vw;
 width: auto;

 @media (max-width: 990px) {
}

 @media (min-width: 961px) {
    height: 13rem;
 }

 @media (max-width: 414px) {
    margin-top: 4rem;
    margin-left: 1rem;
    height: 25vw;
 }

 @media (max-width: 360px) and (max-height: 740px ) {
    height: 24vw;
 }

 @media (min-width: 415px) and (max-width: 960px) {
   height: 20vw;
}

`;

 export const Links = styled.div`
 display: flex;
 align-items: center;

 @media (max-width: 960px) {
    order: 1;
 }

 @media (max-width: 414px) {
    flex-direction: column;
    align-items: flex-start;
 }

 `; 

 export const List = styled.ul`
 display: flex;
 gap: 100px;
 list-style: none;

 @media (max-width: 960px) {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
 }

 @media (min-width: 415px) and (max-width: 960px) {
    gap: 3rem;
}

 @media (max-width: 414px) {
    flex-direction: column;
    gap: 15px; 
 }

 @media (max-width: 360px) and (max-height: 740px ) {
    gap: 10px;
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

@media (max-width: 960px) {
 margin-right: 9px;
}

@media (max-width: 414px) {
 margin-bottom: 10px;  
}
 `; 

export const LogoBox = styled.div`
display: flex;
 justify-content: center;
 align-items: center;

 @media (max-width: 990px) {
 }

 @media (max-width: 960px) {
  order: 2;
 }
 
 @media (max-width: 414px) {
  order: 1;
 }

 @media (min-width: 415px) and (max-width: 960px) {
  
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

export const StyledLink = styled(RouterLink)`
    
`;