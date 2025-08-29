import React from "react";
import { Outlet, Link } from "react-router-dom";

function Pokemon(){
  return(
     <>
       <div>
         <Link to="teste" class="btn btn-secondary">Teste de API</Link>
       </div>
       <div>
         <Link to="app1" class="btn btn-secondary">App 1</Link>
       </div>
       <div>
         <Link to="app2" class="btn btn-secondary">App 2</Link>
       </div>
       <div>
         <Link to="app3" class="btn btn-secondary">App 3</Link>
       </div>
       <hr/>
       <Outlet/>
     </>
  );
}
export default Pokemon;