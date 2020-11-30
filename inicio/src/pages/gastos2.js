import React, { Component } from 'react';
import '../styles/gastos2.css';
import '../header.css';
import '../images/agregar-button.png';
import { Link } from 'react-router-dom';

class Gastos2 extends Component {
  render() {
    return (
  <div className="App">
    <body>
     
        <div class="intro_gastos">
             <h1>GASTOS</h1>
        </div>
        <form>
         <p class="text_gastos">Nombre</p>
         <input class="input_text_gastos" type="text" placeholder="Ingresa el nombre del gasto." />
         
          <p class="text_gastos">Costo</p>
          <input class="input_text_gastos" type="number" placeholder="Valor del gasto"/>
          <select class="lista" id="tipo_gasto" name="tipo_gasto">
           <option value="pago_vivienda">Pago vivienda</option>
           <option value="comida">Comida</option>
           <option value="viaje">Servicios</option>
           <option value="salida con amigos">Deuda</option>
           <option value="otro">Otro</option>
          </select>
          <input class="input_text_gastos" type="text" placeholder="Añade una descripción"/>
          <Link to="/gastos"><button class="button" type="submit">Añadir</button></Link>
        </form>

        </body>   
  
    </div>
  );
}
}

export default Gastos2;