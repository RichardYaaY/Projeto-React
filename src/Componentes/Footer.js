import React from "react";
import calendario from "../Icones/IconeCalendario.svg"
import home from "../Icones/IconeHome.svg"
import mural from "../Icones/IconeMural.svg"
import notificacao from "../Icones/IconeNotificacao.svg"
import "../Styles/footer.css"
import { Link } from "react-router-dom";

export default function Footer(){
    
    return(
        <nav className="app-footer">
            <Link to="/Calendario">
            <img src={calendario} alt="Ícone Calendário"/>
            </Link>
            <Link to="/">
            <img src={home} alt="Ícone Home"/>
            </Link>
            <Link to="/Notificacao">
                <img src={notificacao} alt="Ícone Notificação"/>
            </Link>
            <Link to="/Mural">
                <img src={mural} alt="ícone Mural"/>    
            </Link>
        </nav>
    );
}