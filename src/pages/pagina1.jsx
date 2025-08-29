import * as React from "react";

function Pag1() {
  const Criar = () => {
    const tema = document.getElementById("tema");
    const descrição = document.getElementById("descrição");
    const texto1 = document.getElementById("texto1");
    const texto2 = document.getElementById("texto2");
    const nome = document.getElementById("nome");
    const cinema = document.getElementById("cinema");
    tema.textContent = document.getElementById("novo_tema").value;
    descrição.textContent = document.getElementById("nova_descrição").value;
    texto1.textContent = document.getElementById("novo_texto1").value;
    texto2.textContent = document.getElementById("novo_texto2").value;
    nome.textContent = (`Feito por: ${document.getElementById("novo_nome").value}`);
    cinema.src = "https://cdn.glitch.global/7130693a-e249-491f-8b96-e883d1e8699b/74fce57f-725d-428b-83ea-af9e82a9b961.image.png?v=1748038003287";
  };
  return (
    <div>
      <h1 id="tema">Crie seu Site</h1>
      <h4 id="descrição">
        Infelizmente o dev n teve criatividade para criar um tema para o própio
        site, então por favor crie seu própio site abaixo:
      </h4>
      <br />
      <h3 id="texto1"></h3> <br />
      <h3 id="texto2"></h3> <br />
      <h2 id="nome"></h2> <br />
      <img id= "cinema" src="" height="200px"></img> <br />
      <input
        class="rounded-pill text-center"
        maxlength="50"
        type="text"
        placeholder="Insira o tema"
        id="novo_tema"
      />
      <br />
      <input
        class="rounded-pill text-center"
        maxlength="50"
        type="text"
        placeholder="Insira a descrição"
        id="nova_descrição"
      />
      <br />
      <input
        class="rounded-pill text-center"
        maxlength="400"
        type="text"
        placeholder="Insira o primeiro texto"
        id="novo_texto1"
      />
      <br />
      <input
        class="rounded-pill text-center"
        maxlength="400"
        type="text"
        placeholder="Insira o segundo texto"
        id="novo_texto2"
      />
      <br />
      <input
        class="rounded-pill text-center"
        maxlength="30"
        type="text"
        placeholder="Insira seu nome"
        id="novo_nome"
      />
      <br />
      <button class="btn btn-success" onClick={Criar}>
        Criar site
      </button>
    </div>
  );
}

export default Pag1;
