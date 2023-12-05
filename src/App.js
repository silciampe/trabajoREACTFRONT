import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Inicio from "./componentes/Inicio";
import { Routes, Route} from "react-router-dom" ;
import Nuevo from "./componentes/Nuevo";
import Encontrados from "./componentes/Encontrados"; 
import Buscador from "./componentes/Buscador";
import Elegido from "./componentes/Elegido";
import NotFound from "./componentes/NotFound"




function App() {
  return (
   
    <>   
      <Header />      
          <Routes>
                <Route path="/" element={ <Inicio /> } > </Route>
                <Route path='/nuevo' element={ <Nuevo /> } > </Route> 
                <Route path='/buscador' element={ <Buscador /> } > </Route>
                <Route path='/encontrados/:id' element={ <Encontrados /> } > </Route> 
                <Route path='/elegido' element={ <Elegido /> } > </Route>
                <Route path='*' element={ <NotFound /> } > </Route>
          </Routes>
      <Footer />     
    </>
  );
}

export default App;
