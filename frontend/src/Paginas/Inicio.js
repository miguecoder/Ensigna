import React from "react";
import Menu from '../Componentes/menu';
import Portada from "../Componentes/portada";
import FormularioRegistro from "../Componentes/FormularioRegistro";

function Inicio() {
    return (
        <div className="Inicio">
            <Menu/>
            <Portada/>
            <FormularioRegistro/>
        </div>
    );
}

export default Inicio;