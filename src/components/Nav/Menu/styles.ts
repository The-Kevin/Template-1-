import styled from 'styled-components';

export const StyledMenu = styled.nav<{ open: boolean }>`
    top: 0;
    left: 0;
    height: 100vh;
    width: 20%;
    position: fixed;
    background-color: ${props => props.theme.corLateral};
    z-index: 1;
    padding: 10rem 0;
    flex-direction: column;
    display: ${({ open }) => (open ? "flex" : "none")};
`;

export const StyledLink = styled.a`

    
    padding: 0 2rem;
    font-size: 2rem;
    color: white;
    text-decoration: none;
    
    :hover {
        color: #A9A9A9;
        cursor: pointer;
    }
`;