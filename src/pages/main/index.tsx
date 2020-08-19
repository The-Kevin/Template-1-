import React from 'react';

import Img from '../../components/Imgs';
import Section from '../../components/Section';
import Footer from '../../components/Footer';
import Data from '../../data';

import {Container} from './styles';

const Main = () => {
    
    return(
        <Container>
            <Img />
                <Section 
                    title={Data[0].title}
                    resume={Data[0].resume}
                    text={Data[0].text}
                    autor={Data[0].autor}
                />
                <Footer />
        </Container> 
    );
}

export default Main;