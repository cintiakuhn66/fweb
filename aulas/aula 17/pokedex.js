const imgchooseyou = document.querySelector('#imgpokemon');
const nomepokemon = document.querySelector('#nomepokemon');
const numeropokemon = document.querySelector('#numeropokemon');
const botao1 = document.querySelector('#btn1')
const botao2 = document.querySelector('#btn2')
const input = document.querySelector('#inputName');
const form = document.querySelector('.form-busca');
const tipo1 = document.querySelector('#tipo1');
const tipo2 = document.querySelector('#tipo2');

let idPokemon = 1;

const bgmusic = document.querySelector('#bgmusic')
const sompokemon = document.querySelector('#sompokemon');
const pesopokemon = document.querySelector('#pesopokemon');
const alturapokemon = document.querySelector('#alturapokemon');

const fetchPokemon = async(pokemon) =>{
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}

const showPokemon = async(pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon);
    idPokemon = dataPokemon.id
    imgchooseyou.src = dataPokemon.sprites.front_default;
    nomepokemon.innerHTML = dataPokemon.name;
    numeropokemon.innerHTML = dataPokemon.id;
    pesopokemon.innerHTML = dataPokemon.weight;
    alturapokemon.innerHTML = dataPokemon.height;
    sompokemon.src = dataPokemon.cries.latest;
    tipo1.innerHTML = dataPokemon.types[0].type.name;
    if(dataPokemon.types.length>1){
        tipo2.innerHTML = dataPokemon.types[1].type.name;
    }else
        tipo2.innerHTML ='';
}

botao1.addEventListener("click", () => {
    if(idPokemon>1)
    {
        idPokemon-=1;
        showPokemon(idPokemon);
    }
});

botao2.addEventListener("click", () => {
    idPokemon+=1;
    showPokemon(idPokemon);
});    

input.addEventListener("input", () => {
    idPokemon = toString(input.value);
    idPokemon = input.value;
});


form.addEventListener("submit", (event) => {
    event.preventDefault();
    showPokemon(input.value.toLowerCase());
});

showPokemon

document.querySelector('.form-busca').onsubmit = showPokemon ('100');

/*document.querySelector('#form-busca').onsubmit = showPokemon (idPokemon);*/

