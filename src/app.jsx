import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teste from "./pages/teste.jsx";
import Teste2 from "./pages/teste2.jsx";
import Teste3 from "./pages/teste3.jsx";
import Teste4 from "./pages/teste4.jsx";
import Teste5 from "./pages/teste5.jsx";
import Teste6 from "./pages/teste6.jsx";
import Pag1 from "./pages/pagina1.jsx";
import Pag2 from "./pages/pagina2.jsx";
import Brainrots from "./pages/Brainrots.jsx";
import Exc2 from "./pages/exc2.jsx";
import Exc3 from "./pages/exc3.jsx";
import Header from "./pages/header.jsx";
import MenuP from "./pages/menu_p.jsx";
import Menu1 from "./pages/menu1.jsx";
import P_Teste from "./pages/pokemon/teste.jsx";
import P_App1 from "./pages/pokemon/app1.jsx";
import P_App2 from "./pages/pokemon/app2.jsx";
import P_App3 from "./pages/pokemon/app3.jsx";
import Pokemon from "./pages/pokemon/menu.jsx";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h2>Escolha uma das opçoes acima</h2>} />
          <Route path="/menu-p" element={<MenuP />}>
            <Route path="teste" element={<Teste />} />
            <Route path="teste2" element={<Teste2 />} />
            <Route path="teste3" element={<Teste3 />} />
            <Route path="teste4" element={<Teste4 />} />
            <Route path="teste5" element={<Teste5 />} />
            <Route path="teste6" element={<Teste6 />} />
            <Route path="exc2" element={<Exc2 />} />
            <Route path="exc3" element={<Exc3 />} />
            <Route path="Brainrots" element={<Brainrots />} />
          </Route>
          <Route path="/menu1" element={<Menu1 />}>
            <Route path="pagina1" element={<Pag1 />} />
            <Route path="pagina2" element={<Pag2 />} />
          </Route>
          <Route path="/pokemon" element={<Pokemon />}>
          <Route path="teste" element={<P_Teste />} />
          <Route path="app1" element={<P_App1 />} />
          <Route path="app2" element={<P_App2 />} />
          <Route path="app3" element={<P_App3 />} />
          </Route>
          <Route path="*" element={<h2>Deu problema ai man</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
