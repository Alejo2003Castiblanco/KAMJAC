import React from 'react'



function Menu () {
    return (
        <ul className='menu' id='menu'>
            <li class="nav-li"><a href="principal.php">Mi cuenta<span class="fa fa-chevron-right"></span></a></li>
            <li class="nav-li"><a><i class="fa fa-book"></i> Gestión Cotizacion <span class="fa fa-chevron-right"></span></a></li>
            <ul class="menu">
                <li><a href="Controlador.php?ruta=listarcotizacion&pag=0" class="nav-link">Lista de cotizaciones</a></li>
                <li><a href="Controlador.php?ruta=mostrarInsertarcotizacion" class="nav-link">Agregar cotización</a></li>
            </ul>
            <li class="nav-li"><a><i class="fa fa-edit"></i> Gestión Usuario <span class="fa fa-chevron-right"></span></a>
                <ul class="menu">
                    <li><a href="Controlador.php?ruta=listarUsuario&pag=0" class="nav-link">Lista de usuarios</a></li>
                    <li><a href="Controlador.php?ruta=mostrarInsertarUsuario" class="nav-link">Agregar usuario</a></li>
                </ul>
            </li>
            <li class="nav-li"><a><i class="fa fa-table"></i> Gestión Accesorio <span class="fa fa-chevron-right"></span></a>
                <ul class="menu">
                    <li><a href="Controlador.php?ruta=listaraccesorio&pag=0" class="nav-link">Lista de accesorios</a></li>
                    <li><a href="Controlador.php?ruta=mostrarInsertaraccesorio" class="nav-link">Agregar ccesorio</a></li>
                </ul>
            </li>
                <a class="button"  href="Controlador.php?ruta=cerrarSesion"><i class="fa fa-sign-out pull-right"></i> Salir </a>
        </ul>

    )
}

export default Menu