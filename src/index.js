import React from "react";
import ReactDOM from "react-dom";
// import Componente1 from './componentes/Componente1'
// import { CompA, CompB as B} from "./componentes/DoisComponentes";
// import MultiElementos from "./componentes/MultiElementos";
// import { Teste1, Teste2, Teste3 } from "./componentes/MultiElementos";
// import FamiliaGomes from "./componentes/FamiliaGomes";
// import Familia from "./componentes/Familia";
// import Nome from "./componentes/Nome";
// import ComponenteComFuncao from "./componentes/ComponenteComFuncao";
import Pai from "./componentes/Pai";

const element = document.getElementById('root')

ReactDOM.render(
    <div>
        {/* <Componente1 valor="Olá pessoal" soma={3+4}/> */}
        {/* <CompA valor = "Primeiro Componente"/> */}
        {/* <B valor = "Segundo Componente"/> */}
        {/* <MultiElementos/> */}
        {/* <Teste1/>
        <Teste2/>
        <Teste3/> */}
        {/* <FamiliaGomes/> */}
        {/* <Familia sobrenome="Silva " endereco="Rua Tal " numero="nº 111 " cidade="Franca " estado="SP">
                <Nome nome="Alexandre " />
                <Nome nome="João "/>
                <Nome nome="Sergio "/>
        </Familia> */}
        {/* <Familia>
                <Nome nome="Joyce " sobrenome="Silva"/>
                <Nome nome="Josimara " sobrenome="Silva"/>
                <Nome nome="Janaina " sobrenome="Silva"/>
        </Familia> */}
        {/* <FamiliaGomes sobrenome="Gomes"/> */}
        {/* <ComponenteComFuncao/> */}
        <Pai/>
    </div>
, element
)