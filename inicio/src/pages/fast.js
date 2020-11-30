import React, { Component } from 'react';
import '../styles/fast.css';
import '../header.css';
import '../images/agregar-button.png';
import { Link } from 'react-router-dom';


class Fast extends Component {
  render() {
    return (
  <div className="App">
    <body>
      
        
            <div class="intro_Fast">
             <h1>GASTOS SIN PLANIFICAR</h1>
             <p>Añade todos esos gastos que no fueron planeados, por ejemplo, una salida a comer, ir al hospital o una prenda que te gustó y compraste. Esto te ayudará para saber de manera precisa en que se gastaron los ingresos.</p>
            </div>

            <p class="despegable_fast">Chaqueta de cuero</p>
            <div class="contenedor_fast">
             <p>Fecha: 23 de Abril. <br/>Valor: 100.000 COP  </p>
            </div>
        
            <p class="despegable_fast">Salida a la Discoteca</p>
            <div class="contenedor_fast">
             <p>Fecha: 15 de Marzo. <br/>Valor: 200.000 COP  </p>
            </div>

            <p class="despegable_fast">Finca</p>
            <div class="contenedor_fast">
             <p>Fecha: 3 de Enero. <br/>Valor: 300.000 COP  </p>
            </div>

        
            <Link to="/gastosSinPlanificar/añadir"><img class='agregar' src={require('../images/agregar-button.png')} alt="agregar"></img></Link>

     </body>   
  
    </div>
  );
}
}

export default Fast;