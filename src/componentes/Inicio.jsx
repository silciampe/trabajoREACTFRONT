import React from 'react';
import './css/Inicio.css';
import Logo2 from '../img/logoNaranja.png';
import BuscarPaciente from '../img/alegre-joven-sueter-sombrero-mirando-camara-lupa-sobre-naranja.jpg';
import PacienteNuevo from '../img/PacienteNuevo.png';
import {Link} from "react-router-dom"


function Inicio() {
  return (
    <div>
      <div>
        <h1 className='bienvenida'>Bienvenida Dra. Karantzias</h1><img src={Logo2} alt="logo2"  className='logo2'/>
        </div>
        <div className='contenedorCirculos'>
      <Link to='/Nuevo' >     
     <div className='circulo1'>
              <img src={PacienteNuevo} alt="Paciente Nuevo" className='PacienteNuevo' />
      </div>
      </Link>
      <Link to='/Buscador' >
      <div className='circulo2'>
        <img src={BuscarPaciente} alt="Buscar Paciente" className='BuscarPaciente' />
      </div>
      </Link>
      </div>
        <div className='palabras'>
        <p><strong>Paciente NUEVO</strong></p>
        <p><strong>Buscar  PACIENTE</strong></p>
        </div> 
    </div>
  )
}

export default Inicio;