import styled from 'styled-components';

export const StyledMenu = styled.nav<{ open: boolean }>`
    top: 0;
    left: 0;
    height: 100vh;
    width: 200px;

    position: fixed;
    background-color: ${props => props.theme.corLateral};
    z-index: 1;

    padding: 10rem 0;
    border-radius: 15px;

    
      @media (min-width: 1024px){
        width: 20%;
    }

    transition: transform 0.2s ;
    transform: ${({ open }) =>
    (open ? "translateX(0)" : "translateX(-100%)" )}; 

    
`;

export const StyledLink = styled.a`

    display: flex;
    margin-bottom: 5vw;
    padding: 0 2rem;
    font-size: 2rem;

    color: white;
    text-decoration: none;
   
    


    @media (min-width: 1024px){
        margin-bottom: 2vw;
    }
    
    :hover {
        color: #A9A9A9;
        cursor: pointer;
        transition: 0.3s;
    }
`;