import "./Contador.css";
import React, {Component} from "react";

import Display from "./Display";
import Buttons from "./Buttons";
import PassoForm from "./PassoForm";

class Contador extends Component{

    state = {
        numero : this.state.numeroInicial || 0,
        passo: this.state.passoInicial || 5,
    }

    inc(){
        this.setState({
            numero : this.state.numero + this.state.passoInicial,
        })
    }

    dec(){
        this.setState({
            numero : this.state.numero - this.state.passoInicial,
        })
    }

setPasso = (novoPasso)=>{

    this.state({
        passo : novoPasso ,
    })

}

render(){
    return(
    <div className="Contador" >
        <h2>Contador</h2>
        <p>{this.state.numero}</p>
        <Display numero= {this.state.numero}/>
        <PassoForm passo={ this.state.passo} setPasso={this.setPasso}/>
        <Buttons setInc ={this.inc} SetDec ={this.dec}/>

    </div>
        )
    }
}


export default Contador