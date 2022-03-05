import React from "react"

const Teste1 =  (props) =>
    <div>
        <h1>Teste1</h1>
        <h1>Teste1</h1>
    </div>
const Teste2 =  (props) =>
    <React.Fragment>
        <h1>Teste2</h1>
        <h1>Teste2</h1>
    </React.Fragment>
const Teste3 =  (props) =>
    [
        <h1>Teste3</h1>,
        <h1>Teste3</h1>
    ]

export {Teste1, Teste2, Teste3}