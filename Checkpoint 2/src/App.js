import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Componentes/Home'
import Calçados from './Componentes/Calçados'
import Camisetas from './Componentes/Camisetas'
import Nav from './Componentes/Nav'
import Footer from './Componentes/Footer'
import Frete from './Componentes/Frete'

function App() {
  return (
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Calçados" element={<Calçados/>}/>
          <Route path="/Camisetas" element={<Camisetas/>}/>
          <Route path="/Frete" element={<Frete/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
