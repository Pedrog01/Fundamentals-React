import React from "react";

export default props =>{

return(
    <div>
        <label htmlFor="passoInput"></label>
        <input 
        id="passoInput"
        type="Number"
        value={props.passo}
        onChange={e=> props.setPasso(+e.target.value)} />

    </div>
    )         

}