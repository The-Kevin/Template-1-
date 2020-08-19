import React from 'react';

import {Container} from './styles';
import Img from '../../components/Imgs';
import Section from '../../components/Section'
import Data from '../../data';

const Posts = () => {
    return(
        <Container>
            <Img />
            <Section 
                title={Data[0].title}
                resume={Data[0].resume}
                text={Data[0].text}
                autor={Data[0].autor}
            />
             <Img />
            <Section 
                title={Data[1].title}
                resume={Data[1].resume}
                text={Data[1].text}
                autor={Data[1].autor}
            />
             <Img />
            <Section 
                title={Data[2].title}
                resume={Data[2].resume}
                text={Data[2].text}
                autor={Data[2].autor}
            />
              <Section 
                title={Data[3].title}
                resume={Data[3].resume}
                text={Data[3].text}
                autor={Data[3].autor}
            />
        </Container>
    );
}

export default Posts;