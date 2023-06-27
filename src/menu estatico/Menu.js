import './Menu.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Myima from './favicon.png'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import mi from'./REF. ALPHA.jpg'
import mo from './REF. ITALIA MIXTO.jpg'
import ma from './REF. POLUX SENCILLO.jpg'
function Main() {

  return (

    <body>
    
    <nav>
      <header>
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
      </header>
    </nav>
  <section>
    
  <h2>SOMOS DASAGA</h2>
  <h3>MUEBLES & ACCESORIOS S.A.S.</h3>
  <div id='po'>
  <button id='porta'>Ir a Portafolio</button></div>
   </section>
   <div>
   <Row id='ho'>
        <Col xs={6} md={4}>
          <Image src={mi} width="280"
              height="180" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={ma}  width="280"
              height="180" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={mo} width="280"
              height="180" rounded />
        </Col>
      </Row>
   </div>
  </body>
  );
}

export default Main;
