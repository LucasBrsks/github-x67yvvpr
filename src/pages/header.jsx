import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div class="text-white tal">
        <h1 id="titulo">Bem vindo a um site sem tema nenhum</h1>
      </div>
      <nav class="bg-success text-white">
        <Link to="/menu-p" class="btn btn-secondary">Menu principal</Link>
        <Link to="/menu1" class="btn btn-secondary">Menu 1</Link>
        <Link to="/pokemon" class="btn btn-secondary">Pokemon</Link>
      </nav>
    </>
  );
}
export default Header;
