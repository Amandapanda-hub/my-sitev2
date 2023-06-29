import {Section, StyledSvg,  Header, IconContainer, StyledIcon, PortfolioContainer, PortfolioItem, PortfolioDesc, LinkContainer, PortfolioLink, MainContainer, Left, Right, PortfolioName} from './CoffeeStyles'
import { AiOutlineLink } from 'react-icons/ai';

export default function Coffee() {
    const projects = [
        { id: 1, name: 'Elite Elegance', description: 'Fully Responsive, Multi-Page, Nail Salon template.', url: 'https://amandapanda-hub.github.io/Elite-Elegance/' },
        { id: 2, name: 'React - TechShop', description: 'Fully Responsive, Single-Page, TechShop template.', url: 'https://amandapanda-hub.github.io/techshop/' },
        { id: 3, name: 'Fun Quote Generator', description: 'Fully Responsive, Single-Page, Fun Quote Generator', url: 'https://quote-generator-v1-bdmbggg51-amandapanda-hub.vercel.app/' },
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
