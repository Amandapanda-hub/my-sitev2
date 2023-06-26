import styled, { keyframes } from 'styled-components'

export const data = [
    "Responsiveness",
    "Integration",
    "Version Control",
    "Web Design",
    "Social Media",
  
  ];
  
  export const Section = styled.div`
   height: 100vh;
   scroll-snap-align: center;
   display: flex;
  justify-content: center;
  `;
  
  export const Container = styled.div`
   width: 1400px;
   display: flex;
   justify-content: space-between;
   z-index: 2;


  @media (max-width: 1440px) {
    width: 1200px;
  }
  `;
  
  export const Left = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
    
  `;
  
  export const List = styled.ul`
   list-style: none;
   display: flex;
   flex-direction: column;
   gap: 20px;
  `;
  
  export const fillAnimation = keyframes`
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  `;
  
  export const ListItem = styled.li`
   font-size: 90px;
   font-weight: bold;
   cursor: pointer;
   color: transparent;
   -webkit-text-stroke: 1px white;
   position: relative;
  
   .fill {
    position: absolute;
    top: 0;
    left: 0;
    color: #A248FF;
    overflow: hidden;
    white-space: nowrap;
    width: 0;
   }
  
  
   &:hover .fill {
    animation: ${fillAnimation} 0.8s forwards;
   }
  `;
  
  export const Right = styled.div`
   flex: 1;
  `;