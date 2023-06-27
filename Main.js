import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import Myima from './favicon.png';
function AutoCloseExample() {
  return (
    <>
    <Navbar bg="dark" variant="dark" id='jo'>
        <Container>
        <Navbar.Brand href="#home" ><img src={Myima}  width="80"
              height="80"/> </Navbar.Brand>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-inside">
          Gestion Cotizacion
        </Dropdown.Toggle>

        <Dropdown.Menu  id='inicio'>
          <Dropdown.Item  href="#">Listar Cotizacion </Dropdown.Item>
          <Dropdown.Item  href="#">Insertar Cotizacion</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="inside">
        <Dropdown.Toggle id="dropdown-autoclose-inside">
        Gestion Usuario
        </Dropdown.Toggle>

        <Dropdown.Menu id='inicio'>
        <Dropdown.Item  href="#">Listar Usuario </Dropdown.Item>
        <Dropdown.Item  href="#">Insertar Usuario</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="inside">
        <Dropdown.Toggle id="dropdown-autoclose-inside">
        Gestion Accesorio
        </Dropdown.Toggle>
        <Dropdown.Menu id='inicio'>
        <Dropdown.Item  href="#">Listar  Accesorio </Dropdown.Item>
        <Dropdown.Item  href="#">Insertar  Accesorio</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Container>
      </Navbar> 
    </>
  );
}

export default AutoCloseExample;