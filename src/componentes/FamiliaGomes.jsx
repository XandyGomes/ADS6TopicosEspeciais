import React from "react"
import Nome from "./Nome"

export default props =>
    <div>
        <Nome nome="Alexandre " sobrenome={props.sobrenome}/>
        <Nome nome="José " sobrenome={props.sobrenome}/>
        <Nome nome="Sergio " sobrenome={props.sobrenome}/>
        <Nome nome="Maria " sobrenome={props.sobrenome}/>
    </div>