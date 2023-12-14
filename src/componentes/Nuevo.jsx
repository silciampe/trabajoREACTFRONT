import React from 'react'
import './css/Nuevo.css'
import { useState } from 'react';
import axios from 'axios'; 
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'


 function Nuevo() {

      const [ nombre, setNombre ] = useState('');
      const [ fechaNac, setFechaNac ] = useState('');
      const [ telefono, setTelefono ] = useState('');
      const [ motivoConsulta, setMotivoConsulta ] = useState('');
      const [ medicacionActual, setMedicacionActual ] = useState('');
      const [ laboratorios, setLaboratorios ] = useState('');
      const [ pedidoRecetas, setPedidoRecetas ] = useState('');
      

      const handleSubmit = async (e) =>{
            e.preventDefault();
            console.log(`Nombre: ${nombre}`)
            console.log(`Fecha de Nacimiento: ${fechaNac}`)
            console.log(`Teléfono: ${telefono}`)
            console.log(`Motivo de Consulta: ${motivoConsulta}`)
            console.log(`Medicacion Actual: ${medicacionActual}`)
            console.log(`Laboratorios: ${laboratorios}`)
            console.log(`Pedido de recetas: ${pedidoRecetas}`)

            try {
                  const enviarDatos = await axios.post( 'http://localhost:8080/pacientes/nuevo', {
                        nombre,
                        fechaNac ,
                        telefono,
                        motivoConsulta,
                        medicacionActual,
                        laboratorios,
                        pedidoRecetas

                  } )

                  console.log('respuesta: ', enviarDatos.data);
        
                  mostrarAlerta();

                 
                  
            } catch (error) {
                  console.log(`Tenemos un error en: ${error}`);
            }


      }

      const mostrarAlerta = () => {
            Swal.fire("Paciente creado con éxito");
      }
  return (
    <div className='formulario' id='form'>
      <form onSubmit={ handleSubmit } action="" method='POST' >
        <div>
          <h2>Paciente nuevo</h2>
            <div className='grupo'>
                <input 
                        type="text" 
                        name='nombre' 
                        id='nombre' 
                        value={ nombre }
                        onChange={ (e) => setNombre (e.target.value) }
                        required
                  /> 
                  <span className='barra'></span>
                <label htmlFor="">Nombre y Apellido</label>
          </div>        
          <div className='grupo'>
                <input 
                        type="date" 
                        name='fechaNac' 
                        id='fechaNac'
                        value={ fechaNac } 
                        onChange={ (e) => setFechaNac (e.target.value) }
                        required
                  /> 
                  <span className='barra'></span>
                <label htmlFor="">Fecha de Nac</label>
          </div>      
          <div className='grupo'>
                <input 
                        type="number" 
                        name='telefono' 
                        id='telefono'
                        value={ telefono } 
                        onChange={ (e) => setTelefono (e.target.value) }
                        required
                  /> <span className='barra'></span>
                <label htmlFor="">Teléfono</label>
          </div>   
          <div className='grupo'>
                <input 
                        type="text" 
                        name='motivoConsulta' 
                        id='consulta'
                        value={ motivoConsulta } 
                        onChange={ (e) => setMotivoConsulta (e.target.value) }
                        required
                  /> <span className='barra'></span>
                <label htmlFor="">Motivo de Consulta</label>
          </div>         
          <div className='grupo'>
                <input 
                        type="text" 
                        name='medicacion' 
                        id='medicacion'
                        value={ medicacionActual } 
                        onChange={ (e) => setMedicacionActual (e.target.value) }
                        required
                  /> <span className='barra'></span>
                <label htmlFor="">Medicación Actual</label>
          </div>    
          <div className='grupo'>
                <input 
                        type="text" 
                        name='laboratorios' 
                        id='laboratorios' 
                        value={ laboratorios }
                        onChange={ (e) => setLaboratorios (e.target.value) }
                        required
                  /> <span className='barra'></span>
                <label htmlFor="">Laboratorios Ultimos</label>
          </div>        
          <div className='grupo'>
                <input 
                        type="text" 
                        name='receta' 
                        id='receta'
                        value={ pedidoRecetas } 
                        onChange={ (e) => setPedidoRecetas (e.target.value) }
                        required
                  /> <span className='barra'></span>
                <label htmlFor="">Pedido de Recetas</label>
          </div>  
          <button type='submit' onClick={mostrarAlerta}>Agregar Paciente</button>    
        </div>
      </form>   
      <button className='botonParaIrPrincipal'><Link style={{color: 'white', textDecoration: 'none'}} to={'/Inicio'} >Volver a Principal</Link></button> 
    </div>
  )
}

export default Nuevo;