import { Container, StyledText, Loader, StyledSvg } from './Styled404Page.js';
// import robotImage from '../assets/robotImage.png'; // Please replace this with the path to your robot image.
import LoaderSvg from '../../assets/404/loader.svg'
import StyledBug from '../../assets/404/fixing_bugs.svg'
// const Dot = () => <StyledDot />;

export default function NotFoundPage() {
  return (
    <Container>
      {/* <StyledRobot src={robotImage} alt="Cute Robot"/> */}
      <StyledSvg src={StyledBug} alt="Looks like we're fixing a bug!"/>
      <StyledText>Oops! Page not found...</StyledText>
      <Loader src={LoaderSvg} alt="Loading..."/>
      
    </Container>
  );
}
