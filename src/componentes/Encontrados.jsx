import React from 'react'
import './css/Encontrados.css'
import { useState, useEffect } from 'react'
import axios from 'axios'; 
import { useParams, Link } from 'react-router-dom';


function Encontrados() {

  const [ paciente, setPaciente ] = useState(null);
  const { id } = useParams();
  const URL ='http://localhost:8080/pacientes/encontrados';

  console.log(`${URL}/${id}`);
  


  useEffect ( () => {
    const cargarDetallePaciente = async () => {
      try {
        const { data } = await axios.get(`${URL}/${id}`);
        console.log('Respuesta de la API: ', data);
        setPaciente(data[0]);
        console.log(data);
      } catch (error) {
        console.log('Error al cargar los detalles del paciente', error);
      }
    }
    cargarDetallePaciente();

  }, [id, URL]

  )
console.log('Estado paciente: ', paciente);

if (!paciente) {
  return <h1>Cargando detalles del paciente...</h1>;
}
  return (
<>

      
      <table className='tablaEncontrados'>
          
          <tbody>

           
              
              <tr>
                <td>Nombre</td>
                <td>{paciente && paciente.nombre}</td>
              </tr>    
                
              <tr>
                <td>Fecha Nac</td>
                <td>{paciente && paciente.fechaNac}</td>
              </tr>
              
              <tr>
                <td>Telefono</td>
                <td>{paciente && paciente.telefono}</td>
              </tr>

              <tr>
                <td>Motivo de Consulta</td>
                <td>{paciente && paciente.motivoConsulta}</td>
            </tr>
            
            <tr>
              <td>Medicación Actual</td>
              <td>{paciente && paciente.medicacionActual}</td>
            </tr>
            
            <tr>
              <td>Laboratorios</td>
              <td>{paciente && paciente.laboratorios}</td>
            </tr>
            
            <tr>
              <td>Pedido de Recetas</td>
              <td>{paciente && paciente.pedidoRecetas}</td>
            </tr>
            
            
            </tbody>
            
            </table> 

            <button className='botonParaIrPrincipal'><Link style={{color: 'white', textDecoration: 'none'}} to={'/Inicio'} >Volver a Principal</Link></button> 

</>
               )}
               
               
export default Encontrados;