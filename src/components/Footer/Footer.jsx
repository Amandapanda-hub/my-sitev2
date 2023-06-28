// import React from 'react'
import {Section, Container, Links, Logo, LogoBox, List, ListItem, StyledHomeIcon, StyledWorkIcon, StyledContactIcon, StyledAttributionIcon} from './FooterStyles.js'
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import PandaProgrammerLogo from '../../assets/brand/PandaProgrammerLogo.png';


export default function Footer() {
  const location = useLocation();
  
  const knownPaths = ['/', '/portfolio', '/contact', '/attribution'];

  if (!knownPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <Section>
        <Container>
        <Links>
        <List>
            <ListItem>
              {location.pathname === "/" ? (
                <Link smooth to="#hero-section"><StyledHomeIcon />Home</Link>
              ) : (
                <Link to="/#hero-section"><StyledHomeIcon />Home</Link>
              )}
            </ListItem>
            <ListItem>
              <Link to="/portfolio#my-portfolio"><StyledWorkIcon />Works</Link>
            </ListItem>
            <ListItem>
              <Link smooth to="/#contact-section"><StyledContactIcon />Contact</Link>
            </ListItem>
            <ListItem hideOnMobile>
              <Link smooth to="/attribution#attribution-section"><StyledAttributionIcon />Attribution</Link>
            </ListItem>
          </List>
        </Links>
        
        <LogoBox> 
            <Logo src={PandaProgrammerLogo} alt="Panda Programmer Logo" />
          </LogoBox>
        
        </Container>
    </Section>
  )
}
