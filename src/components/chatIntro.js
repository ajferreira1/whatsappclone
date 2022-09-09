import React from "react";
import './chatIntro.css';
import introimg from '../img/intro.jpg'

export default () => {
    return (
        <div className={"chatIntro"}>
            <img src={introimg} alt="era para ser uma imagem"/>
            <h1>Mantenha seu celular conectado</h1>
            <h2>O Whatsapp conecta ao seu telefone para sincronizar suas mensagens. Para reduzir o uso de dados, conecte
                seu telefone a uma rede wifi.</h2>
        </div>
    );
}
