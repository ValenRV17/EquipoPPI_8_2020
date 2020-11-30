import React, { Component } from 'react';
import '../styles/gastos.css';
import '../header.css';
import '../images/agregar-button.png';
import { Link } from 'react-router-dom';

class Gastos extends Component {
  render() {
    return (
  <div className="App">
    <body>
      
      
        
            <div class="intro_gastos">
             <h1>GASTOS</h1>
             <p>Tener un registro de los gastos fijos es importante para saber cuánto de la renta familiar sobra todos los meses para invertir, ahorrar o incluso destinar al descanso y al ocio.<br/>!No desaproveches esta herramienta!</p>
            </div>

            <p class="despegable_gastos">Comida</p>
            <div class="contenedor_gastos">
             <p>Tipo: Indeterminado <br/>Valor: 200.000 COP  </p>
            </div>
        
            <p class="despegable_gastos">Arriendo</p>
            <div class="contenedor_gastos">
             <p>Tipo: Mensual. <br/>Fecha: Todos los 17. <br/>Valor: 800.000 COP </p>
            </div>

            <p class="despegable_gastos">Servicios e Internet</p>
            <div class="contenedor_gastos">
             <p>Tipo: Mensual. <br/>Fecha: Todos los 30. <br/>Valor: 100.000 COP </p>
            </div>

            <p class="despegable_gastos">Deuda Banco</p>
            <div class="contenedor_gastos">
             <p>Tipo: Mensual. <br/>Fecha: Todos los 18. <br/>Valor: 100.000 COP  </p>
            </div>

            <p class="despegable_gastos">Semestre</p>
            <div class="contenedor_gastos">
             <p>Tipo: Semestral. <br/>Fecha: Todos los 30. <br/>Valor: 1.000.000 COP  </p>
            </div>
        
            <Link to="/gastos/añadir"><img class='agregar' src={require('../images/agregar-button.png')} alt="agregar"></img></Link>

     </body>   
  
    </div>
  );
}
}

export default Gastos;
