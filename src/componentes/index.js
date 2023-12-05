import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'; 
import { useParams } from 'react-router-dom';
import Encontrados from './Encontrados'


const EncontradosIndex = (props) => {

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
    < Encontrados paciente={paciente} >
  )
}

export default EncontradosIndex