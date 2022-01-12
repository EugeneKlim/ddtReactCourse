import React, {useState} from "react";
import App from "./App";
import logo from './logo.svg'

export function ButtonCO () {
    const [show, setGhostState] = useState(false);

    return (
        <div>
            {show ?          
            <div className="GhostText">                
                <img src={logo} className="App-logo" alt="logo" />
                Всем Привет ОТ ГОСПОДИНА РЕАКТА!
                <img src={logo} className="App-logo" alt="logo" /> 
            </div> 
            : null }
            <button
            type="button"
            onClick={()=> setGhostState((curr) => !curr)}>
                НАЖМИ
            </button>
        </div>
    )
} 

export default ButtonCO

