import React, { Component } from 'react';
import '../styles/fast2.css';
import '../header.css';
import '../images/agregar-button.png';
import { Link } from 'react-router-dom';

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
         <select class="lista" id="parentesco" name="tipo_gasinp">
           <option value="Comida Rapida">Comida Rapida</option>
           <option value="Ropa">Ropa</option>
           <option value="Viaje">Viaje</option>
           <option value="Salida con amigos">Salida con amigos</option>
           <option value="otro">Otro</option>
          </select>
          <input class="input_text_fast" type="text" placeholder="Añade una descripción"/>
          <Link to="/gastosSinPlanificar"><button class="button" type="submit">Añadir</button></Link>
        </form>

        </body>   
  
    </div>
  );
}
}

export default Fast2;