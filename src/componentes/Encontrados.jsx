import React from 'react'
import './css/Encontrados.css'
import { useState, useEffect } from 'react'
import axios from 'axios'; 
import { useParams } from 'react-router-dom';


function Encontrados() {

  const [ paciente, setPaciente ] = useState(null);
  const { id } = useParams();
  const URL ='http://localhost:8080/users/encontrados';

  console.log(`${URL}/${id}`);
  


  useEffect ( () => {
    const cargarDetallePaciente = async () => {
      try {
        const { data } = await axios.get(`${URL}/${id}`);
        console.log('Respuesta de la API: ', data);
        setPaciente(data);
        console.log(data);
      } catch (error) {
        console.log('Error al cargar los detalles del paciente', error);
      }
    }
    cargarDetallePaciente();

  }, [id, URL]

  )
console.log('Estado paciente"', paciente);


  return (
<>
    {paciente ? (
      
         <table className='tablaEncontrados'>
             
             <tbody>
   
              
                 
             <tr>
                 <td>Nombre</td>
                 <td>{paciente.nombre}</td>
                 </tr>
               
             
                 
               
                 <tr>
                 <td>Fecha Nac</td>
                 <td>{paciente.fechaNac}</td>
                 </tr>
                 
                 <tr>
                 <td>Telefono</td>
                 <td>{paciente.telefono}</td>
                 </tr>

                 <tr>
                 <td>Motivo de Consulta</td>
                 <td>{paciente.motivoConsulta}</td>
               </tr>
               
               <tr>
               <td>Medicación Actual</td>
               <td>{paciente.medicacionActual}</td>
               </tr>
               
               <tr>
               <td>Laboratorios</td>
               <td>{paciente.laboratorios}</td>
               </tr>
               
               <tr>
               <td>Pedido de Recetas</td>
               <td>{paciente.pedidoRecetas}</td>
               </tr>
               
               
               </tbody>
               
               </table> 
    ) : (
      <p>Loading...</p>
    
      
      )}
      </>
               )}
               
               
export default Encontrados;