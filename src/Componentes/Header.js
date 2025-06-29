import React from "react";
import menu from "../Icones/IconeMenu.svg"
import avatar from "../Icones/Avatar.svg"
//import lupa from "../Icones/Lupa.svg"

import "../Styles/header.css"
import "../Styles/input.css"


function BarraPesquisa(){
  return(
    <div>
        <input className="inputEstilo" type="text" placeholder="Pesquisar"/>
        
    </div>
  );
}

function Teste(){
  alert('oi');
}
export default function Header(){
    return(
        <header className="app-header">
            <img onClick={Teste} src={menu} alt="Ícone menu"/>
            <BarraPesquisa/>
            <img src={avatar} alt="Ícone avatar"/>
        </header>
    );
}