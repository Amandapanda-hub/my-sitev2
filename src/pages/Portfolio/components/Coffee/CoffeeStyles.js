import styled, { keyframes } from 'styled-components'
import { ReactComponent as CoffeeTime} from '../../../../assets/SVG/newcoffee_time.svg'
import { BsBookmarkHeart } from 'react-icons/bs';

export const Section = styled.div`
 height: 100vh;
 scroll-snap-align: center;
 display: flex;
 justify-content: center;
`

export const Left = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
   align-items: center;
   flex-direction: column;

   @media (max-width:700px) {
    margin-top: 5rem;
    height: 2rem;
 
   }
`

export const Right = styled.div`
    flex: 1;
    height: 50vh;
    overflow: auto;
    margin: 1rem;
    border: 1px white dotted;
    border-radius: 5%;

    scrollbar-width: none; 
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;

    }
`

 export const MainContainer = styled.div`
    height: 110vh;
    scroll-snap-align: center;
    width: 1200px;
    display: flex;
    justify-content: space-between;
    margin: auto; 
    align-items: center;

    @media (max-width: 700px) {
      flex: 1 0.8 0.8;
      flex-direction: column;
      height: 100vh;
    }

 ` 

 export const StyledSvg = styled(CoffeeTime)`
    z-index: 2;
    width: 400px;
    object-fit: contain;
    margin: 2rem 2rem;

    @media (max-width: 700px) {
      width: 300px;
      margin: -1rem 2rem;
    }

 ` 

 export const Header = styled.h1`
  margin: 1rem;
  font-weight: 800;
  font-size: 3rem;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  
  &:after {
    content: 'My Works';
    position: absolute;
    top: 0;
    left: 0;
    color: #A248FF;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
    transition: width .8s linear;
  }

  &:before {
    content: '!';
    position: absolute;
    right: -9%;
    top: 50%;
    transform: translateY(-50%);
    font-size: 3rem;
    opacity: 0;
    transition: opacity .3s linear;
  }

  &:hover:after {
    width: 100%;
    
  }

  &:hover:before {
    opacity: 1;
    color: #A248FF;

  }

  @media (max-width:700px) {
    &:after {
      display: none;
    }

    &:hover:before {
      display: none;
    }
  }

`;

const fillAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;
 
 export const StyledIcon = styled(BsBookmarkHeart)`
   font-size: 3rem;
 `
 
 export const IconContainer = styled.div`
 `

//  export const PortfolioSection = styled.div`
//  `

export const PortfolioContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width:700px) {
    
  }

`

export const PortfolioItem = styled.div`
    width: 100%;
    font-size: 1.8rem;
    letter-spacing: 2px;
    margin: 1rem;
    text-align: center;

    @media (max-width:700px) {
      margin: 1rem;
      font-size: 1.4rem;
      letter-spacing: 3px;
    }
`

export const PortfolioImg = styled.img`
 border-radius: 50%;
 width: 35%;
`

export const PortfolioDesc = styled.p`

@media (max-width:700px) {
  font-size: 20px;
  letter-spacing: 5px;
  margin: 6px 6px;
}
`

export const LinkContainer = styled.div`
 
`

export const PortfolioLink = styled.a`
    color: inherit;
    text-decoration: none;
    display: flex; 
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    font-size: 1.2rem;
    cursor: pointer;
    
    .link-icon {
        opacity: 0;
        transition: opacity ease-in-out;
        margin-top: 5px;
        margin-left: 5px;
        font-size: 15px;
      }
    
      &:hover {
        color: #A248FF;
    
        .link-icon {
          opacity: 1;
        }
    }

    @media (max-width:700px) {
      .link-icon {
        transition: none;
        opacity: 1;
      }
    }
`
export const PortfolioName = styled.h2`
  color: transparent;
  -webkit-text-stroke: 1px white;
  font-size: 3rem;
`