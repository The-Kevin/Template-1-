import styled from 'styled-components';

export const Container = styled.div`
    
    margin-left: 50px;
    margin-right: 50px;

    @media (min-width: 1024px){
        font-size: 50px;

        >p{
            font-size: 30px;
        }
    }

`;

export const Content = styled.title`

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 5vw;

`;

export const Paragraph = styled.p`

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 5vw;

`;