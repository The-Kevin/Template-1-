import React from 'react';
import { Content, Container } from './styles';

interface Props{
  title: string;
  resume: string;
  text: string;
  autor: string;
}

const Section: React.FC<Props> = ({title, resume, text, autor}) => {

    return(
      <Container>
        <Content>
          <h1>{title}</h1>
          <h2>{resume}</h2>
          <p>{text}</p>
          <h3>{autor}</h3>
        </Content> 
      </Container>
    );
} 

export default Section;