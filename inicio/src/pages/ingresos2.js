import React, { Component } from 'react';
import '../styles/ingresos2.css';
import '../header.css';



class Ingresos2 extends Component{
  render() {
    return (
  <div className="App">
    <body>
     
        <div class="intro_ingresos">
            <h1>INGRESOS</h1>
        </div>
        <form>
         <p class="text_ingresos">Nombre</p>
         <input class="input_text_ingresos" type="text" placeholder="Ingresa el nombre del Ingreso" />
          <p class="text_ingresos">¿Cada cuánto llega el ingreso?</p>
          <select class="lista">
           <option value="mensual">Mensual</option>
           <option value="quincenal">Quincenal</option>
           <option value="indeterminado">Indeterminado</option>
          </select>
          <p class="text_ingresos">Costo</p>
          <input class="input_text_ingresos" type="number" placeholder="Valor del ingreso"/>
          <p class="text_ingresos">Descripción</p>
          <input class="input_text_ingresos" type="text" placeholder="Añade una descripción"/>
          <button class="button" type="submit">Añadir</button>
        </form>
    </body>   
  
  </div>
  );
}
}

export default Ingresos2;
