import React, { Component } from 'react';
import '../styles/ingresos2.css';
import '../header.css';
import { Link } from 'react-router-dom';


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
         <select class="lista" id="tipo_ingre" name="tipo_ingre">
           <option value="salario">Salario</option>
           <option value="inversion">inversión</option>
           <option value="otro">Otro</option>
          </select>
          <p class="text_ingresos">Costo</p>
          <input class="input_text_ingresos" type="number" placeholder="Valor del ingreso"/>
          <p class="text_ingresos">Descripción</p>
          <input class="input_text_ingresos" type="text" placeholder="Añade una descripción"/>
          <Link to="/Ingresos"><button class="button" type="submit">Añadir</button></Link>
        </form>
    </body>   
  
  </div>
  );
}
}

export default Ingresos2;
