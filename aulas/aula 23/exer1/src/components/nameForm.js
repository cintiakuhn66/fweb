import { useState } from "react";

function Form() {
    const [nome, setNome] = useState('')
    const [mensagem, setMensagem] = useState('')
    const mudaNome = (event) => {
        setNome(event.target.value);
    } 
    const clicaEnter = (event) => {
        event.preventDefault();
        setMensagem(`Bem-vindo: ${nome}`)
    }
    return (
        <div>
            <form onSubmit={clicaEnter}>
                <input
                    type="text"
                    value={nome}
                    placeholder="Digite seu nome"
                    onChange={mudaNome}
                />
            </form>
            <button type="submit">Enviar</button>
            {<p>{mensagem}</p>}
        </div>
    );
}
export default Form;