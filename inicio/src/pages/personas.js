import React, { Component } from 'react';
import '../styles/personas.css';
import '../header.css';
import '../images/agregar-button.png';
import { Link } from 'react-router-dom';


class Personas extends Component {
  render() {
    return (
  <div className="App">
    <body>
      
      
        
            <div class="intro_personas">
             <h1>PERSONAS</h1>
             <p>Añade a las personas que debes mantener y/o que viven contigo, de esta manera nos ayudas a nosotros y a ti a saber cuánto deberías de gastar como mínimo .</p>
            </div>

            <p class="despegable_personas">Tara Gutierrez</p>
            <div class="contenedor_personas">
             <p>Parentesco: Hermana <br/> Genera ingresos: Sí  </p>
            </div>
        
            <p class="despegable_personas">Paola Gutierrez</p>
            <div class="contenedor_personas">
             <p>Parentesco: Novio <br/>Genera ingresos: Sí</p>
            </div>

            <p class="despegable_personas">Juan Carlos Almansa</p>
            <div class="contenedor_personas">
             <p>Genera ingresos: Sí</p>
            </div>

        
            <Link to="/personas/añadir"><img class='agregar' src={require('../images/agregar-button.png')} alt="agregar"></img></Link>

     </body>   
  
    </div>
  );
}
}


export default Personas;