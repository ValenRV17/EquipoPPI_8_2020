import React, { Component } from 'react';
import '../styles/ingresos.css';
import '../header.css';
import '../images/agregar-button.png';
import { Link } from 'react-router-dom';

class Ingresos extends Component{
  render() {
    return (
  <div className="App">
    <body>
        
            <div class="intro_ingresos">
             <h1>INGRESOS</h1>
             <p>Tener un informe de todos tus ingresos te hace ver de manera global cuánto dispones para gastar, puedes repartir los gastos que posees entre estos en la opción de "Gastos". Tener una idea visual acertada de cuánto se gasta es un gran apoyo ya que te puede hacer sentir más cohibido frente a cualquier gasto y hacerte pensar si realmente lo necesitas o no.</p>
            </div>

            <p class="despegable_ingresos">Scarlett Smith</p>
            <div class="contenedor_ingresos">
             <p>Tipo: Mensual. <br/>Fecha: Todos los 30. <br/>Valor: 50.000 COP  </p>
            </div>
        
            <p class="despegable_ingresos">Tara Gutierrez</p>
            <div class="contenedor_ingresos">
             <p>Tipo: Quincenal. <br/>Fecha: Todos los 5 y 20. <br/>Valor: 200.000 COP <br/>Descripción: Ayuda de mi hermana en la casa. </p>
            </div>

            <p class="despegable_ingresos">Marcos Serrano</p>
            <div class="contenedor_ingresos">
             <p>Tipo: Mensual. <br/>Fecha: Todos los 12. <br/>Valor: 750.000 COP <br/>Descripción: Pago de la casa que estoy arrendando. </p>
            </div>

            <p class="despegable_ingresos">Mi novio</p>
            <div class="contenedor_ingresos">
             <p>Tipo: Mensual. <br/>Fecha: Todos los 18. <br/>Valor: 870.000 COP  </p>
            </div>

            <p class="despegable_ingresos">Yo</p>
            <div class="contenedor_ingresos">
             <p>Tipo: Mensual. <br/>Fecha: Todos los 30. <br/>Valor: 1.000.000 COP  </p>
            </div>
        
            <Link to="/ingresos/añadir"><img class='agregar' src={require('../images/agregar-button.png')} alt="agregar"></img></Link>

     </body>   
  
    </div>
  );
  }
}

export default Ingresos;
