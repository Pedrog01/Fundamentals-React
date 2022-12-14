import React, {useState} from "react";
import "./Mega.css";


export default props=>{

    function gerarNumeroNaoContido(){
        const aleatorio = parseInt(Math.random() * (max +1 - min )) + min;
        
        return array.includes(aleatorio)?
            gerarNumeroNaoContido(min, max, array) :
            aleatorio
        }
        
        function gerarNumeros(qtde){
        
        const numeros= Array(qtde).fill(0).reduce(numbs=>{
            const novoNumero = gerarNumeroNaoContido(1, 60, numbs)
            return [...numbs, novoNumero]
        },[])
        .sort((n1,n2)=> n1-n2)
        
        return numeros
        
        }
      
        const [qtde, setQtde] = useState( props.qtde || 6)
        const numeroIniciais = gerarNumeros(qtde)
        const [numeros, setNumeros] = useState(numeroIniciais)

return(
    <div className="Mega">
        <h2>Mega</h2>
        <h3>{numeros.join(" ")}</h3>
        <label> Qtde de Numeros</label>
        <input
            min= "6"
            max ="15"
            type="number"
            value={qtde}
            onChange={(e)=>{
                setQtde(+e.target.value)
                setNumeros(gerarNumeros(+e.target.value)
            }}
    />
        <button onClick={_ =>setNumeros(gerarNumeros(qtde)) } > Gerar Numeros</button>
    </div>
    )

}