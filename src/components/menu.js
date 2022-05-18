import React from "react";
import './menu.css'
function Menu() {
  return(
      <header>
          <nav className="menu">
            <ul className="lista_menu">

                        <li><a href="#">Inicio</a></li>
						<li><a href="#">Transações</a></li>
						<li><a href="#">Sonhos</a></li>
                        <li><a href="#">Orçamento</a></li>
                                        
            </ul>
          </nav>
      </header>
  )
}
export default Menu;
