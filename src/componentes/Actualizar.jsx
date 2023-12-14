import React from 'react'
import './css/Encontrados.css'
import { useState, useEffect } from 'react'
import axios from 'axios'; 
import { useParams } from 'react-router-dom';
import './css/Actualizar.css'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function Actualizar() {

  const [ paciente, setPaciente ] = useState();
  const [datosActualizados, setDatosActualizados] = useState({
    nombre: '',
    fechaNac: '',
    telefono: '',
    motivoConsulta: '',
    medicacionActual: '',
    laboratorios: '',
    pedidoRecetas: ''
  });

  const { id } = useParams();
  const URL ='http://localhost:8080/pacientes/actualizar';

  console.log(`${URL}/${id}`);
  


  useEffect ( () => {
    const EditarPaciente = async () => {
      try {
        const { data } = await axios.put(`${URL}/${id}`);
        console.log('Respuesta de la API: ', data);
        setPaciente(data[0]);
        console.log(data);
        
      } catch (error) {
        console.log('Error al cargar los detalles del paciente', error);
      }
    }
    EditarPaciente();

  }, [id, URL] );

  const handleChange = (e) => {
    setDatosActualizados({
      ...datosActualizados,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${URL}/${id}`, datosActualizados);
      Swal.fire({
        title: "Quieres guardar los cambios?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `NO Guardar`
      }).then((result) => {
        
        if (result.isConfirmed) {
          Swal.fire("Guardado!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Los cambios no han sido guardados", "", "info");
        }
      });
      
    } catch (error) {
      console.error('Error al actualizar el paciente', error);
    }
  };


console.log('Estado paciente: ', paciente);

/* if (!paciente) {
  return <h1>Cargando detalles del paciente...</h1>;
} */
  return (
<>
    < div className='formulario'>
    <form onSubmit={ handleSubmit } action="/actualizar" method='POST' >
          <label htmlFor="nombre"></label>
          Nombre:
        <input
          type="text"
          name="nombre"
          value={datosActualizados.nombre}
          onChange={handleChange}
        />
        
          <label htmlFor="fechaNac"></label>
          Fecha de Nacimiento:
        <input
          type="text"
          name="fechaNac"
          value={datosActualizados.fechaNac}
          onChange={handleChange}
        />   
        <label htmlFor="telefono"></label>
        Telefono
        <input
          type="number"
          name="telefono"
          value={datosActualizados.telefono}
          onChange={handleChange}
        />   
        <label htmlFor="motivoConsulta"></label>
        Motivo de Consulta       
        <input
          type="text"
          name="motivoConsulta"
          value={datosActualizados.motivoConsulta}
          onChange={handleChange}
        />   
        <label htmlFor="medicacionActual"></label>
        Medicacion Actual
        <input
          type="text"
          name="medicacionActual"
          value={datosActualizados.medicacionActual}
          onChange={handleChange}
        />   
        <label htmlFor="laboratorios"></label>
        Laboratorios
        <input
          type="text"
          name="laboratorios"
          value={datosActualizados.laboratorios}
          onChange={handleChange}
        />   
        <label htmlFor="pedidoRecetas"></label>
        Pedido de recetas
        <input
          type="text"
          name="pedidoRecetas"
          value={datosActualizados.pedidoRecetas}
          onChange={handleChange}
        />

        <button type="submit">Actualizar</button>
      </form>
      </div>
      <div>
    <button className='botonParaIrPrincipal'><Link style={{color: 'white', textDecoration: 'none'}} to={'/Inicio'} >Volver a Principal</Link></button> 
    </div>
</>
               )}
               
               
export default Actualizar;