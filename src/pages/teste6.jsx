import * as React from 'react';
import { useEffect, useState} from 'react';

function Teste6(){
    const [contador, setContador] = useState(0);
    useEffect(() => {
      console.log("Ebaaa deu certooo");
      const salvo = localStorage.getItem("Contador");
      if (!isNaN(salvo)) setContador(parseInt(salvo));
   },[]);
    useEffect(() => {
       console.debug(`o contador agora está:`, contador);
       document.title = `Contador: ${contador}`;
       localStorage.setItem("Contador", contador);
    },[contador]);

  return(
  <>
    <h2>Testando o useEffect</h2>
    <button class="btn btn-danger"onClick={() => setContador(contador + 1)}>+</button>
    </>
  );
}

export default Teste6;