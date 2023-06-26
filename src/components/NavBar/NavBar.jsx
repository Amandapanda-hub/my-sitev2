import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
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
  StyledAttributionIcon,
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

  const checkIfSticky = () => {
    const heroSection = document.getElementById(heroSectionId);

    if (heroSection) {
      const heroSectionHeight = heroSection.offsetHeight;

      if (window.pageYOffset > heroSectionHeight) {
        setissticky(true);
      } else {
        setissticky(false);
      }
    }
  };

  const checkMobileView = () => {
    setMobileView(window.innerWidth <= 990);
  };  

  useEffect(() => {
    window.addEventListener('scroll', checkIfSticky);
    window.addEventListener('resize', checkMobileView);

    checkIfSticky();
    checkMobileView();

    return () => {
      window.removeEventListener('scroll', checkIfSticky);
      window.removeEventListener('resize', checkMobileView);
    };
  }, []);

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
      <ListItem hideOnMobile>
        <Link smooth to="/attribution#attribution-section">
          Attribution<StyledAttributionIcon />
        </Link>
      </ListItem>
      {isMobileView && (
        <ListItem>
          <Button>Hire Now</Button>
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
          <Logo src="/src/assets/brand/PandaProgrammerLogo.png" />
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
            <Button>Hire Now</Button>
            <Icon className='CustomIcon'>
              <StyledSearchIcon />
            </Icon>
          </Icons>
        )}
      </Container>
    </Section>
  );
}
