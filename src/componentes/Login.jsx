import './css/Login.css'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'; 


const Login = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate()


  const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(`email: ${email}`)
        console.log(`password: ${password}`)

        try {
              const enviarDatos = await axios.post( 'http://localhost:8080/users/validar', {
                  email,
                  password

              } )

              if (enviarDatos.data.isValidCredentials === true) { 
                console.log("es valido");
                  navigate('/inicio')
                }else {
                console.log("usuario y/o contraseña inválido");
               }

              
        } catch (error) {
              console.log(`Tenemos un error en: ${error}`);
        }




  }
  return (
    <div className='loguin'>
      <form onSubmit={ handleSubmit } className='formLoguin'  method="POST">
       
       <div>
         
           <input 
                type="email"  
                name="email" 
                id="email" 
                placeholder="email"
                value={ email }
                onChange={ (e) => setEmail (e.target.value) }
                required
                />
           
       </div>
       <div>
         
           <input 
                type="password"  
                name="password" 
                id="password" 
                placeholder="contraseña" 
                value={ password }
                onChange={ (e) => setPassword (e.target.value) }
                required
                />
       </div>
       <button className='botonIngresar' type="submit">Ingresar</button>

   </form>
   <button className='botonParaIrALoguin'><Link style={{color: 'white', textDecoration: 'none'}} to={'/Registro'} >Aún no tienes cuenta?</Link></button>
    </div>
  )
}

export default Login