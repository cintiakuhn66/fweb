import React, { useState, useCallback, useMemo } from "react";

function Items (){
    const [contador, setContador] = useState(0)
    const [items, setItems] = useState([
        {id:1, nome:'Produto A', preco:10},
        {id:2, nome:'Produto B', preco:20},
        {id:3, nome:'Produto C', preco:5},
        {id:4, nome:'Produto D', preco:15},
    ])
    const clicou= useCallback(()=>{setContador(contador+1)}, [contador])
    const filtroItem = useMemo(()=>{return items.filter(item=>item.preco>10)}, [items])

    return(
        <div>
            <p>{contador}</p>
            <button onClick={clicou}>Adicionar</button>
            <ul>
                {filtroItem.map(item=>(<li key={item.id}>{item.nome}</li>))}
            </ul>
        </div>
    )
}

export default Items;