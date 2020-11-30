import React, { Component } from 'react';
import '../styles/gastos2.css';
import '../header.css';
import '../images/agregar-button.png';


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
         <p class="text_ingresos">¿Cada cuánto llega el ingreso?</p>
         <select class="lista" id="tipo" name="tipo">
           <option value="mensual">Mensual</option>
           <option value="quincenal">Quincenal</option>
           <option value="indeterminado">Indeterminado</option>
          </select>
          <p class="text_gastos">Costo</p>
          <input class="input_text_gastos" type="number" placeholder="Valor del gasto"/>
          <p class="text_gastos">Descripción</p>
          <input class="input_text_gastos" type="text" placeholder="Añade una descripción"/>
          <button class="button" type="submit">Añadir</button>
        </form>

        </body>   
  
    </div>
  );
}
}

export default Gastos2;