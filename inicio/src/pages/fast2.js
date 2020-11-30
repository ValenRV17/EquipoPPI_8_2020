import React, { Component } from 'react';
import '../styles/fast2.css';
import '../header.css';
import '../images/agregar-button.png';


class Fast2 extends Component {
  render() {
    return (
  <div className="App">
    <body>
      
        <div class="intro_Fast">
             <h1>GASTOS SIN PLANIFICAR</h1>
        </div>
        <form>
         <p class="text_fast">Nombre</p>
         <input class="input_text_fast" type="text" placeholder="Ingresa el nombre del gasto sin planificar" />
         <p class="text_fast">Costo</p>
         <input class="input_text_fast" type="number" placeholder="Valor del gasto"/>
         <p class="text_fast">Descripción</p>
          <input class="input_text_fast" type="text" placeholder="Añade una descripción"/>
          <button class="button" type="submit">Añadir</button>
        </form>

        </body>   
  
    </div>
  );
}
}

export default Fast2;