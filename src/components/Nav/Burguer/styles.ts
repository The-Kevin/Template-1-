import styled from 'styled-components';

export const StyledBurguer = styled.button<{open: boolean}>`
    position: fixed;
    top: 85px;
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

    left: ${({ open }) => (open ? "30px" : "3vw")};
    div {
        transition: all 0.3s linear;
        transform-origin: 1px;
    
        :first-child {
        transform: ${({ open }) =>
            (open ? "rotate(45deg)" : "rotate(0)")};
        }
        :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) => 
            (open ? "translateX(20px)":"translateX(0)")};
        }
        :nth-child(3) {
        transform: ${({ open }) =>
            (open ? "rotate(-45deg)" : "rotate(0)")};
        }
    }

    >div {
        position: relative;
        width: 2rem;
        height: 0.25rem;
        border-radius: 10px;
        background-color: ${({open}) => open? '#fff' : '#000000' }
    }
`;