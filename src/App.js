import logo from './logo.svg';
import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import REF_ALPHA from './img/REF_ALPHA.jpg';
import REF_POLUX_SENCILLO from './img/REF_POLUX_SENCILLO.jpg';
import REF_ITALIA_MIXTO from './img/REF_ITALIA_MIXTO.jpg';






function Carrusel() {
  return (
    <div>
      <p> hola</p>
      //<img src={REF_ALPHA} alt={"REF_ALPHA"}/>
      <img src={REF_POLUX_SENCILLO} alt={"REF_POLUX_SENCILLO"}/>
      <img src={REF_ITALIA_MIXTO} alt={"REF_ITALIA_MIXTO"}/>
      
    </div>
    
  );
    
  
}

export default Carrusel;
