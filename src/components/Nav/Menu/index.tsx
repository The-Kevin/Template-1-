import React, {useState} from 'react';

import Burguer from '../Burguer';
import { StyledMenu, StyledLink } from './styles';

const Menu = () => {
    const  [open, setOpen] = useState<boolean>(false);
    const close = () => setOpen(false);
    return(
        <div>
            <StyledMenu open={open}>
                <StyledLink onClick={() => close()}>Opção 1</StyledLink>
                <StyledLink onClick={() => close()}>Opção 2</StyledLink>
                <StyledLink onClick={() => close()}>Opção 3</StyledLink>
            </StyledMenu>
            <Burguer open={open} setOpen={setOpen} />
        </div>
    );
}

export default Menu;