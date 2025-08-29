import React from "react";
import { useEffect, useState } from "react";

function P_App1(){
  const [id,setId] = useState(0);
  const [nome,setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [img, setImg] = useState("");
  const [som, setSom] = useState("");

  const [move1, setMove1] = useState("");
  const [move2, setMove2] = useState("");
  const [move3, setMove3] = useState("");
  const [move4, setMove4] = useState("");
  
  useEffect(() => {
    const api = "https://pokeapi.co/api/v2/pokemon/25";
    fetch(api)
    .then((res) => res.json())
    .then((data) => {
      setId(data.id);
      setNome(data.name);
      setTipo(data.types[0].type.name);
      setImg(data.sprites.front_default);
      setSom(data.cries.latest);

      setMove1(data.moves[0].move.name);
      setMove2(data.moves[1].move.name);
      setMove3(data.moves[2].move.name);
      setMove4(data.moves[3].move.name);
    })
  },[]);
  const tocarSom = () => {
    const audio = new Audio(som);
    audio.play();
  }
  return(
    <div>
      <h1>Informações de pokemon</h1>
      <h2>Id: {id}</h2>
      <h2>Pokémon: {nome}</h2>
      <h2>Tipo: {tipo}</h2>
      <img
      src = {img}
      height = "300px"
      />
      <br />
      <h3>Aviso: Som baixo, aumente no máximo o volume para conseguir escutar o(a) {nome}</h3>
       <button class="btn btn-primary" onClick={tocarSom}>Tocar</button>
      <hr/>
      <h2>Moves</h2>
      <ul>
       <li>{move1}</li>
       <li>{move2}</li>
       <li>{move3}</li>
       <li>{move4}</li>
      </ul>
    </div>

  );
}

export default P_App1;