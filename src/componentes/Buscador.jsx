import React from 'react'
import "./css/Buscador.css"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Buscador() {

  const [ pacientes, setPacientes ] = useState([]);
  const [ query, setQuery ] = useState( '' );

  
  const URL = 'http://localhost:8080/pacientes/buscador';
  
  
  const getPaciente = async () => {
    try {
      const { data } = await axios.get(`${URL}?nombre=${query}`);
      setPacientes(data.pacientes);
      console.log(data);
     

    } catch (error) {
      console.error('Error en el get', error);
    }
  };
  const EliminarPaciente = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/pacientes/delete/${id}`);
      setPacientes((prevPacientes) =>
        prevPacientes.filter((paciente) => paciente._id !== id)
      );

      Swal.fire({
        title: "Esta seguro que quiere eliminar ese paciente?",
        text: "Una vez que ha sido borrado, no se podrá revertir",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "SI"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "ELIMINAR!",
            text: "El paciente fue eliminado",
            icon: "success"
          });
        }
      });
    } catch (error) {
      console.error('Error al eliminar el paciente', error);
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
      <form className='formularioBusqueda'>
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
                  
                        <td>{paciente.nombre}</td>
                  
                        <td><Link to={`/encontrados/${paciente._id} `}>Ver Detalles</Link>   </td>
                        <td><Link to={`/actualizar/${paciente._id} `}>Actualizar</Link>   </td>
                        <td><button type="button" onClick={() => EliminarPaciente(paciente._id)} >BORRAR</button></td>
                      <td></td>
                        </tr>
                    )}
            </div>


     </div>
<button type="button"  onClick={handleBuscarClick} >BUSCAR</button>   
      </form>    
    </div>
    <button className='botonParaIrPrincipal'><Link style={{color: 'white', textDecoration: 'none'}} to={'/Inicio'} >Volver a Principal</Link></button> 
    </div>
  );
   }

export default  Buscador;