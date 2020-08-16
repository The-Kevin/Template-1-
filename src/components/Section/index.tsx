import React from 'react';

import { Container,Content, Paragraph } from './styles';

interface Props{
    title: string;
    text: string;
}

const Section: React.FC<Props> = ({title, text}) => {

    return(
       <Container>
            <Content>
                <h1>{title}</h1>
            </Content>

            <Paragraph>
                <p>{text}</p>
            </Paragraph>
       </Container>
    )
}

export default Section