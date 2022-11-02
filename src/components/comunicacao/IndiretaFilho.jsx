import React from "react";

export default props => {
const gerarIDade = () => parseInt(Math.random() * (20)) + 50
const gerarNerd = () => Math.random() > 0.5
    return (
        
        <div>
            <div>Filho</div>
            <button onClick={
                _ => {
                    props.quandoClicar('João', gerarIDade, true)
                    props.quandoClicar('João', gerarNerd, true)
                }
            }>
                Fornecer Informações
                </button>
        </div>
    )
}