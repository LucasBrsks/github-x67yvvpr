import * as React from "react";
import { Outlet, Link } from "react-router-dom";

function Menu_p() {
  return (
    <>
      <div>
        <Link to="teste" class="btn btn-secondary">
          Teste 1
        </Link>
        <Link to="teste2" class="btn btn-secondary">
          Teste 2
        </Link>
        <Link to="teste3" class="btn btn-secondary">
          Teste 3
        </Link>
        <Link to="teste4" class="btn btn-secondary">
          Teste 4
        </Link>
        <Link to="teste5" class="btn btn-secondary">
          Teste 5
        </Link>
        <Link to="teste6" class="btn btn-secondary">
          Teste 6
        </Link>
        <Link to="Brainrots" class="btn btn-secondary">
          Ex1
        </Link>
        <Link to="exc2" class="btn btn-secondary">
          Ex2
        </Link>
        <Link to="exc3" class="btn btn-secondary">
          Ex3
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}

export default Menu_p;
