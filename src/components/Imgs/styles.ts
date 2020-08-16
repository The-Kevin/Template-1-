import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    > img{
        height: 30vw;
        width: 40vw;
    }
    @media (min-width: 1024px){
        > img{
        height: 20vw;
        width: 30vw;
      }
    }
`;