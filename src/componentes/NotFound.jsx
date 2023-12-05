import React from 'react'
import './css/NotFound.css'
import notFound from '../img/notfound.jpg'

 function NotFound() {
  return (
    <div className="notFound">
    <center><img src={notFound} alt="notFound"  className='fotoNotFound'/></center>
    </div>
  )
}

export default NotFound;