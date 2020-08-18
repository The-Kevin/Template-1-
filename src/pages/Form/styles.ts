import styled from 'styled-components';

export const Content = styled.div`


    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-flow: row wrap;

    position: relative;
    top: 150px;


    @media (min-width: 1040px){
        top: 100px;
    }

    >form{
        display: flex;
        flex-direction: column;
    
        font-size: 40px;

        @media (min-width: 1040px){
            font-size: 2vw;
            justify-content: center;
            align-items: center;

            >input{
                width: 500px;
            }
        }
       
        >label{
            align-self: center;
            border-radius: 5px;
            padding: 5px;

            color: white;
            background: ${props => props.theme.corHeader};

            transition: 0.2s;

            :hover{
                color: black;
                background: ${props => props.theme.corFundo};
                
                transition: 0.2s;
            }
        }
        >input{
            height: 25px;
            border-radius: 5px;
            font: Arial;
            text-align: center;
            font-size: 20px;
        }

        >textarea{
           border: 1px solid;
           border-radius: 15px;
           font-size: 20px;
           -moz-border-radius:20px;
            -webkit-border-radius:4px;
            box-shadow: 1px 1px 2px;    
            -moz-box-shadow: 1px 1px 2px;
            -webkit-box-shadow: 1px 1px 2px;
        }

        >button{
            height: 40px;
            width: 150px;
            align-self: center;
            margin-bottom: 20px;

            border-radius: 10px;
            transition: 0.2s;


            :hover{
                color: white;
                background: ${props => props.theme.corHeader};
                transition: 0.2s;
            }
        }
    

    }

`;