import {Container, Section, SubHeader, Paragraph, Form, Button, Input, MainSection } from './HireStyles.js'
import Introduction from './components/Introduction/Introduction.jsx'

export default function Hire() {
  return (
    <Container>
        <MainSection>
            <Introduction/>
    <Section>
      <SubHeader>Services Offered</SubHeader>
      <Paragraph> knbwekfnwekjanfkjewanf </Paragraph>
    </Section>
    <Section>
      <SubHeader>Pricing</SubHeader>
      <Paragraph> fnewklfnwjahefbehjwbfhja </Paragraph>
    </Section>
    <Section>
      <SubHeader>Testimonials</SubHeader>
      <Paragraph> newjkfbjwaebnfjhnehjwabnfjheabkfh </Paragraph>
    </Section>
    <Form>
      <Input type="text" placeholder="Your Name" />
      <Input type="email" placeholder="Your Email" />
      <Input type="text" placeholder="Your Project" />
      <Button type="submit">Submit</Button>
    </Form>
    <Section>
      <SubHeader>FAQs</SubHeader>
      <Paragraph> fhkwebafhjcbeajhfberjhabfhjaer </Paragraph>
    </Section>
    <Section>
      <SubHeader>Terms and Conditions</SubHeader>
      <Paragraph> fenwhajfbuhaerwbfhjabvhjs </Paragraph>
    </Section>
    <Button>Call to Action</Button>
    </MainSection>
  </Container>
  )
}
