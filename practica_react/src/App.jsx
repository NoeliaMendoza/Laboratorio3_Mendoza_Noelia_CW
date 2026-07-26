import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { InicioPages, NosotrosPages, ContactosPages, PersonajesPages, Login, Register, Dashboard } from "./pages";
import { PrivateRoutes } from "./routes/private.routes.jsx";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<InicioPages />} />
          <Route path="/nosotros" element={<NosotrosPages />} />
          <Route path="/contactos" element={<ContactosPages />} />
          <Route path="/personajes" element={<PersonajesPages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard" element={
              <PrivateRoutes>
                <Dashboard />
              </PrivateRoutes>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
