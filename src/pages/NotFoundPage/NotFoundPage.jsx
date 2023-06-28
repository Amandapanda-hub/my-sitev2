import { Container, ErrorSection, StyledText, Loader, StyledSvg, Button } from './Styled404Page.js';
import { HashLink as Link } from 'react-router-hash-link';
import LoaderSvg from '../../assets/404/purple-loader.svg'
import StyledBug from '../../assets/404/fixing_bugs.svg'

export default function NotFoundPage() {
  return (
    <ErrorSection>
        <Container>
      {/* <StyledRobot src={robotImage} alt="Cute Robot"/> */}
      <StyledSvg src={StyledBug} alt="Looks like we're fixing a bug!"/>
      <StyledText>Oops! Page not found...</StyledText>
      <Loader src={LoaderSvg} alt="Loading..."/>
      <StyledText>
        <Link to="/#hero-section">
            <Button>Go Home?</Button>
        </Link>
      </StyledText>
        </Container>
    </ErrorSection>
  );
}
