import React from 'react'
import "./css/Buscador.css"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Buscador() {

  const [ pacientes, setPacientes ] = useState([]);
  const [ query, setQuery ] = useState( '' );

  const URL = 'http://localhost:8080/users/buscador';
  
  const getPaciente = async () => {
    try {
      const { data } = await axios.get(`${URL}?nombre=${query}`);
      setPacientes(data.pacientes);
      console.log(data);
    } catch (error) {
      console.error('Error en el get', error);
    }
  };

  useEffect(() => {
    
  }, [query]);

  const handleBuscarClick = () => {
   getPaciente();
  };

  return (
    <div >
      <div className='formulario'>
      <form>
        <div>
          <h2>Buscar Paciente</h2>
          <input                       
                type="text" 
                name='nombre' 
                placeholder='Buscar por Nombre'
                id='nombre' 
                required 
                onChange={(e) => setQuery(e.target.value)}
            /> 

<div className="grupo">
                    {pacientes.map(paciente =>
                        <tr key={paciente._id}>
                        <td> {paciente._id} </td>
                        <td>{paciente.nombre}</td>
                        <td>{paciente.fechaNac}</td>
                        <td><Link to={`/encontrados/${paciente._id} `}>Ver Detalles</Link>   </td>
                        </tr>
                    )}
            </div>


     </div>
<button type="button"  onClick={handleBuscarClick} >BUSCAR</button>   
      </form>    
    </div>
    </div>
  );
   }

export default  Buscador;