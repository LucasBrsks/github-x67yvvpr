import React, { useEffect, useState } from "react";

function P_App3() {
  class Pokemon {
    constructor(id, nome, tipo, img, som, move1, move2, move3, move4) {
      this.id = id;
      this.nome = nome;
      this.tipo = tipo;
      this.img = img;
      this.som = som;
      this.move1 = move1;
      this.move2 = move2;
      this.move3 = move3;
      this.move4 = move4;
    }
    tocarSom() {
      const audio = new Audio(this.som);
      audio.volume = 1;
      audio.play();
    }
  }

  const [pokemon, setPokemon] = useState(
    new Pokemon(0, "", "", "", "", "", "", "", "")
  );
  const [idGerado, setIdGerado] = useState(1);
  const [idNovo, setIdNovo] = useState("");

  const MudarPokemon = () => {
    if (idNovo) {
      setIdGerado(idNovo);
    }
  };

  useEffect(() => {
    const api = `https://pokeapi.co/api/v2/pokemon/${idGerado}`;
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(
          new Pokemon(
            data.id,
            data.name,
            data.types[0].type.name,
            data.sprites.front_default,
            data.cries.latest,
            data.moves[0].move.name,
            data.moves[1].move.name,
            data.moves[2].move.name,
            data.moves[3].move.name
          )
        );
      });
  }, [idGerado]);

  return (
    <div>
      <input
        className="rounded-pill text-center"
        maxLength="4"
        min = "1"
        max = "1025"
        type="number"
        value={idNovo}
        onChange={(e) => setIdNovo(e.target.value)}
      />
      <br />
      <button className="btn btn-success" onClick={MudarPokemon}>
        Mudar Pokemon
      </button>
      <h1>Informações de pokemon</h1>
      <h2>Id: {pokemon.id}</h2>
      <h2>Pokémon: {pokemon.nome}</h2>
      <h2>Tipo: {pokemon.tipo}</h2>
      <img src={pokemon.img} height="300px" />
      <br />
      <h3>
        Aviso: Som baixo, aumente no máximo o volume para conseguir escutar o(a){" "}
        {pokemon.nome}
      </h3>
      <button className="btn btn-primary" onClick={() => pokemon.tocarSom()}>
        Tocar
      </button>
      <hr />
      <h2>Moves</h2>
      <ul>
        <li>{pokemon.move1}</li>
        <li>{pokemon.move2}</li>
        <li>{pokemon.move3}</li>
        <li>{pokemon.move4}</li>
      </ul>
    </div>
  );
}

export default P_App3;
