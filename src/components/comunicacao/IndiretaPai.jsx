import IndiretaFilho from './IndiretaFilho'
import { useState } from 'react';
//useState: retorna um array


export default props => {
    let [nome, setNome] =  useState('?');
    let [idade, setIdade] =  useState(0);
    let [nerd, setNerd] =  useState(false);

    function fornecerInformacoes(nome, idade, nerd){
        setNome = (nome);
        setIdade = (idade);
        setNerd = (nerd);

       console.log(nomeParam, idadeParam, nerdParam)
    }

    return (
        <div>
            <span>{nome}</span>
            <span><strong>{idade}</strong></span>
            <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}