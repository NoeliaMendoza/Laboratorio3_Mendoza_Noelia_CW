import './App.css';
import { Layout } from './components';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { InicioPages, ContactosPages, NosotrosPages, PersonajesPages } from './pages';
function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<InicioPages></InicioPages>} ></Route>
          <Route path='/nosotros' element={<NosotrosPages></NosotrosPages>} ></Route>
          <Route path='/contactos' element={<ContactosPages></ContactosPages>} ></Route>
          <Route path='/personajes' element={<PersonajesPages></PersonajesPages>} ></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

