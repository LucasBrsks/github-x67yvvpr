import * as React from 'react';
import { useEffect, useState} from 'react';

function Exc3() {
  const [contador, setContador] = useState(0);
  const [va, setVa] = useState(1)
  const [expo, setExpo] = useState(0);
  const [x, setX] = useState(0);
  useEffect(() => {
    const s_cookies = localStorage.getItem("Cookies");
    const s_va = localStorage.getItem("Va");
    const s_expo = localStorage.getItem("Expo");
    const s_x = localStorage.getItem("x");
    const n_contador = parseInt(s_cookies);
    const n_va = parseInt(s_va);
    const n_expo = parseInt(s_expo);
    const n_x = parseInt(s_x);
    if (!isNaN(n_contador)){setContador(n_contador);}
    else{setContador(0);}
    if (!isNaN(n_va)){setVa(n_va);}
    else{setVa(1);}
    if (!isNaN(n_expo)){setExpo(n_expo);}
    else{setExpo(0);}
    if (!isNaN(n_x)){setX(n_x);}
    else{setX(0);}
  }, [])
  useEffect(() => {
    document.title = `Cookies: ${contador}`;
    localStorage.setItem("Cookies", contador);
 },[contador]);
 useEffect(() => {
  localStorage.setItem("Va", va);
},[va]);
useEffect(() => {
  localStorage.setItem("Expo", expo);
},[expo]);
useEffect(() => {
  localStorage.setItem("x", x);
},[x]);
  return (
    <>
      <h1>Cookie Clicker</h1>
      <h3>Cookies: {contador}</h3>
      <h3>Cookies/click: {va}</h3>
      <button id="click"onClick={() => {setContador(contador + va +(expo * x)); setExpo(contador**2)}} class="btn btn-dark">
        +
      </button><br/>
      {contador > 99 && va < 10 && x < 1 && <p>Ok, vc chegou em 100 cookies, vc eh um desocupado nivel baixo ainda, se reiniciar vc aumenta seus cliques para {va + 1} cookies por click</p>}
      {contador > 99 && va < 10 && x < 1 && <button class="btn btn-warning" onClick={() => {setContador(0); setVa(va + 1);}}>Reiniciar</button>}
      {va > 9 && <p>Vc chegou em um nivel de desocupado bem avançado, agora seus cliques irão elevar seus cookies por 2, seu próximo desafio será chegar ao infinito, o céu eh o limite meu caro</p>}
      {va > 9 && <button class="btn btn-danger"onClick={() => {setContador(0); setVa(1); setX(1); setExpo(0)}}>Agora a chapa vai esquentar</button>}
      {contador == Infinity && <h1>FIM</h1>}
      {contador == Infinity && <p>PARABENS! VC ALCANÇOU O NIVEL DESOCUPADO NIVEL MASTER! Tente de novo só que o mais rapido q conseguir</p>}
      {contador == Infinity && <button  onClick={() => {setContador(0); setVa(1); setX(0); setExpo(0)}}>Recomeçar tudo</button>}
    </>
  );
}

export default Exc3;