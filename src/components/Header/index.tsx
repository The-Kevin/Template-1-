import React from 'react';

import { Container, Heade, Login, Icon } from './styles';



const Header = () => {
    let login = false;

    return (
       <Container>
            <Heade>Logo</Heade>
            <div>
                <Icon />
                <Login>
                    <button id="botao">{login ? 'usuario' : 'login'}</button>
                </Login>
            </div>
       </Container> 
       
    ); 
}

export default Header