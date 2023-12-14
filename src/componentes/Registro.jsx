import './css/Registro.css'
import { useState } from 'react';
import axios from 'axios'; 
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'


const Registro =  () => {

  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate();



  const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(`username: ${username}`)
        console.log(`email: ${email}`)
        console.log(`password: ${password}`)
      

        try {
              const enviarDatos = await axios.post( 'http://localhost:8080/users/registro', {
                  username,
                  email,
                  password

              } )

              console.log('respuesta: ', enviarDatos.data);

              
      mostrarAlerta();

      navigate('/');
      
     
    } catch (error) {
      console.log(`Tenemos un error en: ${error}`);
    }
  };


  const mostrarAlerta = () => {
        Swal.fire("Usuario creado con éxito");
      
      }


  return (
    <div className='registro'>
      <form onSubmit={ handleSubmit } className='formularioRegistro' action="/registro" method="POST">
      <div>
         
           <input 
                  type="username"  
                  name="username" 
                  id="username" 
                  placeholder="nombre"
                  value={ username }
                  onChange={ (e) => setUsername (e.target.value) }
                  required
                    />
       </div>
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
       <button className='botonRegistro' type="submit"  onClick={mostrarAlerta}>Crear un USUARIO</button>
       
   </form>
    </div>
  )
}

export default Registro