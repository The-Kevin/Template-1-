import styled from 'styled-components';

import {FilePerson} from '@styled-icons/bootstrap/FilePerson';

export const Container = styled.div`

    margin: 0;
    padding: 0; 
    height: 50px;
    width: 100%;
    font-weight: bold;
    display: flex;
    position: fixed;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    z-index: 2;
    box-shadow: 2px 2px 10px black;

    @media (min-width: 1140px){
        height: 70;
    }
    
    background: ${props => props.theme.corHeader};
    color: ${props => props.theme.corFundo};
    
    >div{
        display: flex;
    }
  
    
`;
export const Login = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    >button {
        margin-left: 10px;
        margin-right: 20px;
        padding: 60;
        height: 30px;
        width: 60px;

        border-radius: 10px;
        border: 1px solid #111E6C;
        background: #ffff;

        transition: 0.3s;

        :hover{
        color: white;
        background: #F20505;
        transition: 0.3s;
        border: none;
        }
    }
`;

export const Heade = styled.div`

    align-self: center;

    margin-left: 10px;
    font-size: 35px;
`;

export const Icon = styled(FilePerson)`

    align-self: center;
    
    height: 40px;
    width: 40px;
`;
