import React from 'react';

import { Container, Titulo, Resumo, Texto, Autor } from './styles';


const Form = () => {
    return(
        <Container>
            <Titulo>
                <label htmlFor="title">Título</label><br/>
                <input type="text" placeholder="Digite aqui o titulo de sua publicação!"/><br/>
            </Titulo>
            <Resumo>
                <label htmlFor="resume">Resumo</label>
                <input type="text" placeholder="Digite aqui o resumo da sua publicação!"/><br/>
            </Resumo>
            <Texto>
                <label htmlFor="text">Texto</label><br/>
                <textarea name="" placeholder="Digite aqui sua publicação!" rows={15} cols={50}></textarea><br/>
            </Texto>
            <Autor>
                <label htmlFor="author">Autor</label>
                <input type="text" placeholder="Digite aqui o autor da publicação"/>
            </Autor>
            <button type="submit">Enviar</button>
        </Container>
    );
}

export default Form;