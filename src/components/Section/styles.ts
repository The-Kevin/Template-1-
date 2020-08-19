import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin: 20px;
    margin-bottom: 0;
`;

export const Content = styled.div`

    padding: 20px; 
    display: flex;
    flex-direction: column;

    >h1{
        font-size: 7vw;
        margin-bottom: 3vw;
        align-self: center;

        @media(min-width: 1040px){
            font-size: 50px;
        }
    }
    >h2{
        font-size: 4vw;
        margin-bottom: 3vw;
        align-self: center;

        @media(min-width: 1040px){
            font-size: 30px;
        }
        
    }
    >p{
        font-size: 3vw;
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 30px;
        
        @media(min-width: 1040px){
            margin-left: 150px;
            margin-right: 150px;
            margin-bottom: 70px;
            font-size: 20px;

        }
    }
    >h3{
        font-size: 3vw;
        margin-bottom: 3vw;
        align-self: center;

        @media(min-width: 1040px){
            font-size: 20px;
        }
    }

`;
