import React from "react";
import "../Styles/main.css"
export default function Main({children}){
    return(
        <div className="app-main">
            {children}
        </div>
    );
}