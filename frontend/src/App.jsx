import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";
import IniciarSesion from "./components/IniciarSesion";
import Inicio from "./components/Inicio";
import TemplateLayout from "./components/layout/TemplateLayout";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TemplateLayout />}>
          <Route index element={<IniciarSesion />} />
          <Route path="/api/tareas" element={<Inicio />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
