import { useState, useMemo } from "react";
import { Link } from 'react-router-dom';

function Calculadora(){
    const [numero1,setNumero1] = useState(0)
    const [numero2,setNumero2] = useState(0)

    const soma = useMemo(()=>{console.log('Calculando a soma');return numero1+numero2;},[numero1,numero2]);

    return(
        <div>
            <input type="number" value={numero1} onChange={(e)=>setNumero1(parseInt(e.target.value))}/>
            <input type="number" value={numero2} onChange={(e)=>setNumero2(parseInt(e.target.value))}/>
            <p>soma: {soma}</p>
            <Link to='/contador'>Página Contador</Link>
        </div>
    )
}

export default Calculadora;