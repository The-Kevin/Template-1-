import styled from 'styled-components';

export const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
    top: 100px;

    >button{
        font-size: 20px;
        padding: 10px;
        width: 200px;
        border-radius: 5px;
        margin-bottom: 20px;

        background: ${props => props.theme.corHeader};
        color: white;

        :hover{
           
        }
    }
`;


export const Titulo = styled.form`
    font-size: 30px;

    >label{
        padding: 5px;

    }

    >input {
        padding: 5px;
        width: 50vw;
        margin-bottom: 50px;
    }

    @media (min-width: 1040px){
        >input{
            width: 25vw;
        }
    }

`;

export const Resumo = styled.form`
     display: flex;
     flex-direction: column;
     font-size: 20px;

        >label{
            padding: 5px;
        }

        >input {
            padding: 5px;
            width: 50vw;
            margin-bottom: 50px;
        }

        @media (min-width: 1040px){
        >input{
            width: 25vw;
        }
    }
`;

export const Texto = styled.form`
    display: flex;
    flex-direction: column;

    font-size: 30px;
    width: 100vw;

    >label{
        margin-left: 20px;
    }

    >textarea{
        margin-bottom: 20px;
        padding: 10px;
    }

    @media (min-width: 1040px){
        justify-content: center; 
        align-items: center;
        >textarea{
            width: 50vw;
        }
    }
`;

export const Autor = styled.form`
    display: flex;
    flex-direction: column;

    font-size: 25px;

    >input{
        padding: 5px;
        margin-bottom: 10px;
    }

    @media (min-width: 1040px){
        width: 300px;
    }
`;