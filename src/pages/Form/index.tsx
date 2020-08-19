import React from 'react';

import { Content } from './styles';


const Form = () => {
    return(
        <Content>
        <form>
            <label htmlFor="title">Título</label><br/>
                <input type="text" placeholder="Digite aqui o titulo de sua publicação!"/><br/>
            <label htmlFor="resume">Resumo</label>
                <input type="text" placeholder="Digite aqui o resumo da sua publicação!"/><br/>
            <label htmlFor="text">Texto</label><br/>
                <textarea name="" placeholder="Digite aqui sua publicação!" rows={15} cols={50}></textarea><br/>
            <label htmlFor="author">Autor</label>
                <input type="text" placeholder="Digite aqui o autor da publicação"/>

            <button type="submit">Enviar</button>
        </form>
        </Content>  
    );
}

export default Form;