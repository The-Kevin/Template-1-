import React from 'react';

import { Container } from './styles';

import theImg from '../../images/work-in-progess.png'

const Imgs: React.FC = () => {
    return (
        <Container>
           <img src={theImg} alt=""/>
        </Container>
        
    )
}

export default Imgs;