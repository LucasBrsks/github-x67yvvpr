import * as React from "react";
import { Outlet, Link } from "react-router-dom";

function Menu1() {
  return (
    <>
      <div>
        <Link to="pagina1" class="btn btn-secondary">
          Pagina 1
        </Link>
        <Link to="pagina2" class="btn btn-secondary">
          Pagina 2
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}

export default Menu1;
