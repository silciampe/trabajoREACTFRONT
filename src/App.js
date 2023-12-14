import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Inicio from "./componentes/Inicio";
import { Routes, Route} from "react-router-dom" ;
import Nuevo from "./componentes/Nuevo";
import Encontrados from "./componentes/Encontrados"; 
import Buscador from "./componentes/Buscador";
import NotFound from "./componentes/NotFound";
import Registro from "./componentes/Registro";
import Loguin from "./componentes/Login";
import Actualizar from "./componentes/Actualizar";





function App() {
  return (
   
    <>   
      <Header />      
          <Routes>
                 <Route path="/inicio" element={ <Inicio /> } > </Route>
                <Route path="/registro" element={ <Registro /> } > </Route>
                <Route path="/" element={ <Loguin /> } > </Route>
                <Route path='/nuevo' element={ <Nuevo /> } > </Route> 
                <Route path='/buscador' element={ <Buscador /> } > </Route>
                <Route path='/encontrados/:id' element={ <Encontrados /> } > </Route> 
              {/*   <Route path='/actualizar' element={ <Actualizar /> } > </Route>  */}
                <Route path='/actualizar/:id' element={ <Actualizar /> } > </Route> 
                <Route path='*' element={ <NotFound /> } > </Route>
          </Routes>
      <Footer />     
    </>
  );
}

export default App;
