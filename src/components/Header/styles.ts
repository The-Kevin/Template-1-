import styled from 'styled-components';


export const Container = styled.div`

    margin: 0;
    padding: 0; 
    height: 50px;
    width: 100%;
    font-weight: bold;
    display: flex;
    position: fixed; /*this */
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    z-index: 2;

    @media (min-width: 1140px){
        height: 70;
    }
    
    background: ${props => props.theme.corHeader};
    color: ${props => props.theme.corFundo};
    
    >header {
        font-size: 40px;
        margin-left: 15px;

    }
    
`;
export const Login = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    

    >img{
        background: ${props => props.theme.corFundo};
        border-radius: 10px;
        height: 45px;
    }

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
