import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/progreso.css';

class Progreso extends Component{
    render() {
      return (
          <body>
            <div class="progreso">
                <h1 >PROGRESO</h1>
                <p></p>
            </div>
            <div class="barritas">
                <p>Dinero ahorrado el mes pasado</p>
                <div class="recipiente">
                    <div class="skill mes-pas">10.000,00$</div>   
                </div>
                <p>Dinero ahorrado este mes</p>
                <div class="recipiente">
                    <div class="skill mes">40.000,00$</div>   
                </div>
            </div>

          </body>
          
        );
    }
   }
  export default Progreso;