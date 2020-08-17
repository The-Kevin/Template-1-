import React from 'react';

import { Container, Login} from './styles';

import img from '../../images/icons8-name-50.png';

const Header = () => {
    let login = false;

    return (
       <Container>
           <header>Logo</header>
           <Login>
                <img src={img} alt="user-icon"/>
                <button id="botao">{login ? 'usuario' : 'login'}</button>
            </Login>
       </Container> 
       
    ); 
}

export default Header