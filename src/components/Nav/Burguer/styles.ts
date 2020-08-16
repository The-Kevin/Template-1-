import styled from 'styled-components';

export const StyledBurguer = styled.button<{open: boolean}>`
    position: fixed;
    top: 60px;
    left: 3vw;
    width: 2rem;
    height: 2rem;
    padding: 0;
    background: transparent;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: none;
    cursor: pointer;
    outline: none;
    z-index: 1;

    >div {
        position: relative;
        width: 2rem;
        height: 0.25rem;
        border-radius: 10px;
        background-color: ${({open}) => open? '#fff' : '#000000' }
    }
`;