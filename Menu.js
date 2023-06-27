import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Myima from './favicon.png'
function ColorSchemesExample() {

  return (

    <body>
    
    <nav>
      <Navbar bg="dark" variant="dark" id='jo'>
        <Container>
          <Navbar.Brand href="#home" ><img src={Myima}  width="80"
              height="80"/> </Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link id='inicio' href="#home">Acerca de nosotros</Nav.Link>
            <Nav.Link id='inicio' href="#features">Servicios</Nav.Link>
            <Nav.Link  id='inicio' href="#pricing">Catalogos</Nav.Link>
            <Nav.Link id='inicio' href="#iniciar" >Iniciar Sesion</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </nav>
  <section>
    
  <h2>SOMOS DASAGA</h2>
  <h3>MUEBLES & ACCESORIOS S.A.S.</h3>
  <div id='po'>
  <button id='porta'>Ir a Portafolio</button></div>
   </section>
   
  </body>
  );
}

export default ColorSchemesExample;