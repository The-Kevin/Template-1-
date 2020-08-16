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
   
    
    background: ${props => props.theme.corHeader};
    color: ${props => props.theme.corFundo};
    
    >header {
        font-size: 40px;
        margin-left: 15px;
    }
    
`;

export const Button = styled.button`
    background: ${props => props.theme.corLateral};
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 12px;

    margin-top: 10px;
    margin-right: 30px;
    padding: 15px;
    height: 15px;
    position: relative;
   
`;
