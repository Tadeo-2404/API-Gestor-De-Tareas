import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editar from "./components/Editar";
import Error404 from "./components/Error404";
import IniciarSesion from "./components/IniciarSesion";
import Inicio from "./components/Inicio";
import TemplateLayout from "./components/layout/TemplateLayout";
import ContextTareas from "./context/ContextProvider";

const App = () => {
  return (
    <BrowserRouter>
      <ContextTareas>
        <Routes>
          <Route path="/" element={<TemplateLayout />}>
            <Route index element={<IniciarSesion />} />
            <Route path="/api/tareas" element={<Inicio />} />
            <Route path="/api/tareas/:id" element={<Editar />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </ContextTareas>
    </BrowserRouter>
  );
};

export default App;
