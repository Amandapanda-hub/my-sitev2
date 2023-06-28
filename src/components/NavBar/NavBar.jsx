import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import PandaProgrammerLogo from '../../assets/brand/PandaProgrammerLogo.png';

import {
  StyledSearchIcon,
  Section,
  Container,
  Links,
  Icon,
  Icons,
  Logo,
  List,
  ListItem,
  Button,
  StyledHomeIcon,
  StyledWorkIcon,
  StyledContactIcon,
  MobileMenu,
  StyledMenuIcon,
  StyledCloseIcon
} from './NavBarStyles.js';
import { useLocation } from 'react-router-dom';

export default function NavBar({ heroSectionId }) {
  const [issticky, setissticky] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobileView, setMobileView] = useState(false);
  const location = useLocation();

  const checkIfSticky = useCallback(() => {
    const heroSection = document.getElementById(heroSectionId);

    if (heroSection) {
      const heroSectionHeight = heroSection.offsetHeight;

      if (window.pageYOffset > heroSectionHeight) {
        setissticky(true);
      } else {
        setissticky(false);
      }
    }
  }, [heroSectionId]);

  const checkMobileView = useCallback(() => {
    setMobileView(window.innerWidth <= 990);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', checkIfSticky);
    window.addEventListener('resize', checkMobileView);

    checkIfSticky();
    checkMobileView();

    return () => {
      window.removeEventListener('scroll', checkIfSticky);
      window.removeEventListener('resize', checkMobileView);
    };
  }, [checkIfSticky, checkMobileView]);

  NavBar.propTypes = {
    heroSectionId: PropTypes.string.isRequired,
  };

  const menuList = (
    <List>
      {isMobileView && isMenuOpen && (
        <ListItem>
          <Icon onClick={() => setMenuOpen(false)}>
            <StyledCloseIcon />
          </Icon>
        </ListItem>
      )}
      <ListItem>
        {location.pathname === "/" ? (
          <Link smooth to="#hero-section">
            Home
            <StyledHomeIcon />
          </Link>
        ) : (
          <Link to="/">Home<StyledHomeIcon /></Link>
        )}
      </ListItem>
      <ListItem>
        <Link to="/portfolio#my-portfolio">
          Works<StyledWorkIcon />
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/#contact-section">
          Contact<StyledContactIcon />
        </Link>
      </ListItem>
      {isMobileView && (
        <ListItem>
          <Link to="/hire">
            <Button>Hire Now</Button>
          </Link>
          <Icon>
            <StyledSearchIcon />
          </Icon>
        </ListItem>
      )}
    </List>
  );
  
  return (
    <Section $issticky={issticky}>
      <Container>
        <Links>
        <Logo src={PandaProgrammerLogo} alt="Panda Programmer Logo" />
          {isMobileView ? (
            <>
              <Icon onClick={() => setMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <StyledCloseIcon /> : <StyledMenuIcon />}
              </Icon>
              {isMenuOpen && <MobileMenu>{menuList}</MobileMenu>}
            </>
          ) : (
            menuList
          )}
        </Links>
        {!isMobileView && (
          <Icons>
           <Link to="/hire">
              <Button>Hire Now</Button>
            </Link>
            <Icon className='CustomIcon'>
              <StyledSearchIcon />
            </Icon>
          </Icons>
        )}
      </Container>
    </Section>
  );
}
