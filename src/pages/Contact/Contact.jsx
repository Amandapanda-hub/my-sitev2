// useRef from Emailjs >>
import React, { useRef, useState } from 'react';
import {Section, Container, Left, Title, Form, Input, TextArea, Button, Right, StyledPaperPlane} from './ContactStyles.js';
import Map from './components/Map/Map.jsx';
// EmailJs imports >>
import emailjs from '@emailjs/browser';

export default function Contact() {

  const ref = useRef()
  const [success,setSuccess] = useState(null)

    const handleSubmit =e=> {
    e.preventDefault()

  emailjs.sendForm('service_pncoqtn', 'template_zim7t0o', ref.current, 'eQM2GXsIRyRcT-SdO')
    .then((result) => {
      console.log(result.text);
    setSuccess(true)
      }, (error) => {
        console.log(error.text);
    setSuccess(false)
  });
};

  return (
    <Section id="contact-section">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title> 
              Contact Me
              <StyledPaperPlane />
              </Title>
            <Input placeholder="Name" name="name"/>
            <Input placeholder="Email" name="email"/>
            <TextArea placeholder="Write your message" name="message" rows={10}/>
            <Button type="submit">Send</Button>
            {success && "Your message has been sent, I'll get back to you soon!"}
          </Form>
        </Left>
        <Right>
        <Map/>
        </Right>
      </Container>
    </Section>
  )
}