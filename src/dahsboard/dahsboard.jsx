import React from "react";
import Logo_dasaga_white from './Logo_dasaga_white.png';
import fondo from './fondo.jpg'


function Menu() {
return (
    <div className="primary-header">
        <div className="navbar container">
        <img src={Logo_dasaga_white} alt={"Logo_dasaga_white"} width={80}/>
        <div className="menu">
        
        <li className="nav-li"><a href="principal.php">Mi cuenta<span class="fa fa-chevron-right"></span></a></li>
            <ul className='menu' >
                <li className="nav-li"><i class="fa fa-book"></i> Gestión Cotizacion <span class="fa fa-chevron-right"></span></li>
            </ul>
            <ul className="submenu">
                <li><a href="Controlador.php?ruta=listarcotizacion&pag=0" class="nav-link">Lista de cotizaciones</a></li>
                <li><a href="Controlador.php?ruta=mostrarInsertarcotizacion" className="submenu">Agregar cotización</a></li>
            </ul>
            <li className="menu"><i class="fa fa-edit"></i> Gestión Usuario <span class="fa fa-chevron-right"></span>
              <ul className="submenu">
                  <li><a href="Controlador.php?ruta=listarUsuario&pag=0" class="nav-link">Lista de usuarios</a></li>
                  <li><a href="Controlador.php?ruta=mostrarInsertarUsuario" className="submenu">Agregar usuario</a></li>
              </ul>
            </li>
          <li className="menu"><i class="fa fa-table"></i> Gestión Accesorio <span class="fa fa-chevron-right"></span>
              <ul className="submenu">
                  <li><a href="Controlador.php?ruta=listaraccesorio&pag=0" class="nav-link">Lista de accesorios</a></li>
                  <li><a href="Controlador.php?ruta=mostrarInsertaraccesorio" className="submenu">Agregar ccesorio</a></li>
              </ul>
          </li>
              <a class="button"  href="Controlador.php?ruta=cerrarSesion"><i class="fa fa-sign-out pull-right"></i> Salir </a>
        </div>
      </div>
      <img src={fondo} alt={"fondo.jpg"} />
    </div>
      

  )
}

export default Menu