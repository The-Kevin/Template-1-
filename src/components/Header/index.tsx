import React from 'react';

import { Container, Button } from './styles';

const Header = () => {
    let login = false;

    return (
       <Container>
           <header>Logo</header>   
            <Button>{login ? 'usuario' : 'login'}</Button>
       </Container> 
       
    ); 
}

export default Header