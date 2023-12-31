import {Section, StyledSvg,  Header, IconContainer, StyledIcon, PortfolioContainer, PortfolioItem, PortfolioDesc, LinkContainer, PortfolioLink, MainContainer, Left, Right, PortfolioName} from './CoffeeStyles'
import { AiOutlineLink } from 'react-icons/ai';

export default function Coffee() {
    const projects = [
        { id: 1, name: 'TechShop', description: 'Fully Responsive, Single-Page, TechShop template.', url: 'https://amandapanda-hub.github.io/techshop/' },
        { id: 2, name: 'Palette Paradise', description: 'Fully Responsive, Dynamic, Multi-Page, Blog Template', url: 'https://blog-blog-mu.vercel.app/' },
        { id: 2, name: 'WellVibe', description: 'Fully Responsive, Multi-Page, Business Template with Blog', url: 'https://color-landing-layout.vercel.app/' },
        { id: 3, name: 'Aquilone', description: 'Single-Section, Responsive Landing Page', url: 'https://basic-box-landingpage-9pyh4cikv-amandapanda-hub.vercel.app/' },
        { id: 4, name: 'Marine Mirage', description: 'Single-Page, Multi-Section, Responsive Landing Page', url: 'https://underthesea-landingpage.vercel.app/' },
        { id: 5, name: 'Blissful Blooms', description: 'Fully Responsive, Single-Page, Nature Conservatory template.', url: 'https://blissful-blooms-react-tailwind-55cl.vercel.app/' },        
        { id: 6, name: 'Elite Elegance', description: 'Fully Responsive, Multi-Page, Nail Salon template.', url: 'https://amandapanda-hub.github.io/Elite-Elegance/' },
        { id: 7, name: 'Fun Quote Generator', description: 'Fully Responsive, Single-Page, Fun Quote Generator', url: 'https://quote-generator-v1-bdmbggg51-amandapanda-hub.vercel.app/' },
      ];
    
      const handleClick = (e, url) => {
        e.preventDefault();
        if (window.confirm("Do you want to open this link in a new tab?")) {
          window.open(url, '_blank');
        }
      };

  return (
    <>
        <Section>
            <MainContainer>
               <Left>
                    <StyledSvg/>
                        <Header>My Works</Header>
                            <IconContainer>
                                <StyledIcon/> 
                            </IconContainer>
                </Left>
             
                        <Right>
                            {/* <PortfolioTitle>My Portfolio</PortfolioTitle> */}
                            <PortfolioContainer>
                                {projects.map(project => (
                                    <PortfolioItem key={project.id}>
                                        {/* <PortfolioImg src={project.imgSrc} alt={project.name}/> */}
                                            <PortfolioName>{project.name}</PortfolioName>
                                                <PortfolioDesc>{project.description}</PortfolioDesc>
                                                    <LinkContainer>
                                                    <PortfolioLink onClick={(e) => handleClick(e, project.url)}>
                                                            View More  <AiOutlineLink className="link-icon" />
                                                            </PortfolioLink>
                                                    </LinkContainer>
                                    </PortfolioItem>
                                ))}
                            </PortfolioContainer>
                        </Right>

            </MainContainer>
        </Section>
    </>
  )
}
