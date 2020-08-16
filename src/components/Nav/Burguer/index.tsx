import React from 'react';

import { StyledBurguer } from './styles';

type Props = {
    open: boolean;
    setOpen: (v: boolean) => void;
};

const Burguer = (props: Props) => {
    return(
        <StyledBurguer
        open={props.open}
        onClick={() => props.setOpen(!props.open)} >
             <div />
             <div />
             <div />
        </StyledBurguer>
    );
}

export default Burguer;