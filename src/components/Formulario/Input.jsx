import "./Input.css";
import React, { useState } from "react";


export default props =>{

    const [valor,setValor] = useState("Iniciar");

function quandoMudar(){

    setValor(e.target.value);

}
return(
    <div className="Input">
            <h2> {valor}</h2>

        <div style={{
            display: flex,
            flexDirection:"column"
        }}></div>

        <input valor = {valor} onChange={quandoMudar}/> 
        <input valor = {valor} readOnly/> 

    </div>    

)

}