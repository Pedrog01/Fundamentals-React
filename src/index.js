import React from "react";
import ReactDOM  from "react-dom";

import Pai from "./Components/Pai";
import Filho from "./Components/Filho";

ReactDOM.render(
    
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho name="Pedro" />
            <Filho name="Gabriel" />
            <Filho name="Carla" />
        </Pai>
    </div>
    ,document.getElementById('root')
    
)
