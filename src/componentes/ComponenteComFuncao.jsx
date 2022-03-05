import React from "react"

const aprovados = ["Alexandre", "Joyce", "Janaina", "Josimara"]

export default props => {

    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return(
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )

}