import { useState, useEffect } from "react";
import './contador.css'


function Contador() {
    const [contador, setContador] = useState(0)
    useEffect(()=>{const timerID = setInterval(()=>{setContador(contador+1)},2000)
        return () => clearInterval(timerID)},[contador]);

    function diminuirCont() {
        setContador(contador - 1);
    };
    function adicionarCont() {    
        setContador(contador + 1);
    } ;

    return (
        <div>
            <div>{contador}</div>
            <button className="but" onClick={diminuirCont}>Diminuir</button>
            <button className="but" onClick={adicionarCont}>Adicionar</button>
        </div>
    );
}

export default Contador;