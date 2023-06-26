import styled, { keyframes } from 'styled-components'
import { Canvas } from '@react-three/fiber'
// import { icons } from 'react-icons';
// import {CgAttribution} from 'react-icons/cg'
import {AiOutlineLink} from 'react-icons/ai'


export const data = [
    "Responsiveness",
    "Integration",
    "Version Control",
    "Web Design"
  ];
 
//   export const descData = {
//     "Responsiveness": "This is a cube created through Three.js BoxGeometry, along with customized cube texture.",
//     "Integration": '"Iphone 14 Pro" (https://skfb.ly/oGPAr) by Tycho Magnetic Anomoly is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).',
//     "Version Control": '"React logo" (https://skfb.ly/oERzY) by xenadus is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).',
//     "Web Design": '"Laptop" (https://skfb.ly/oGpVQ) by GeniusPilot2016 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).',
// };

    export const descData = {
        'Responsiveness': [
            {
                text: 'This is a cube created through Three.js BoxGeometry, ',
                style: {color: '#200839'}
            },
            {
                text: 'along with customized cube texture.',
                style: {color: '#200839'}
            }
        ],
        'Integration': [
            {
                text: '"Iphone 14 Pro" ',
                style: {color: '#A248FF'},
                link: 'https://skfb.ly/oGPAr',
                icon: true
            },
            {
                text: 'by Tycho Magnetic Anomoly.',
                style: {color: ''}
            },
            {
                text: 'Which is licensed under ',
                style: {color: ''}
            },
            {
                text: 'Creative Commons Attribution. ',
                style: {color: 'white' },
                link: 'http://creativecommons.org/licenses/by/4.0/', 
                icon: true,
            }
        ],
        'Version Control': [
            {
                text: '"React logo" ',
                style: {color: '#A248FF'},
                link: 'https://skfb.ly/oERzY',
                icon: true
            },
            {
                text: 'by the Xenadus. ',
                style: {color: ''}
            }, 
            {
                text: 'Which is licensed under ',
                style: {color: ''}
            },
            {
                text: 'Creative Commons Attribution. ',
                style: {color: 'white' },
                link: 'http://creativecommons.org/licenses/by/4.0/', 
                icon: true,
            } 
        ],
        'Web Design': [
            {
                text: '"Laptop" ',
                style: {color: '#A248FF'},
                link: '(https://skfb.ly/oGpVQ',
                icon: true
            },
            {
                text: 'by GeniusPilot2016. ',
                style: {color: ''}
            },
            {
                text: 'Which is licensed under',
                style: {color: ''}
            },
            {
                text: 'Creative Commons Attribution',
                style: {color: ''},
                link: 'http://creativecommons.org/licenses/by/4.0/',
                icon: true
            }
        ]
    }

    export const StyledCanvas = styled(Canvas)`
        overflow: visible;
        width: 100%;
        height: 100%;
    `;

    // export const StyledAttributionIcon = styled(CgAttribution)`
    // font-size: 24px;
    // margin-top: 10px;
    // `

    export const StyledAttributionIcon = styled(AiOutlineLink)`
    font-size: 24px;
    color: transparent;
    -webkit-text-stroke: 1px white;
  
         a:hover & {
            color: #A248FF; 
            -webkit-text-stroke: 0;
        }
    `

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
  `;
  

  export const Left = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   margin: 2rem;
    
  `;

  export const Right = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
`;
  
  export const Middle = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
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
   font-size: 50px;
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
  
  export const Desc = styled.div`
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke: 2px white;
    position: relative;
    gap: 10px;
    word-wrap: break-word;
  `;
  

  export const Box = styled.div`
    max-width: 100%;
    padding: 0 20px; 
    text-align: flex-end;
`;

export const StyledLink = styled.a`
    color: transparent;
    text-decoration: none;
    -webkit-text-stroke: 2px white;

    &:hover {
        color: #A248FF; 
        -webkit-text-stroke: 1;
    }
`;

export const StyledIconLink = styled.a`
  color: white; 
  display: flex;
  align-items: center;
  gap: 5px; // creates a small gap between the text and the icon

  &:hover {
    color: #A248FF; 
  }
`;