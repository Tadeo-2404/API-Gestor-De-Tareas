import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Context = createContext();
import axios from "axios";

const ContextTareas = ({ children }) => {
  const [auth, setAuth] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState({});
  const navigate = useNavigate();
  const responsable = localStorage.getItem("responsable");

  useEffect(() => {
    const allowed = async () => {
      setAuth(responsable);

      if (!responsable) {
        navigate("/");
        setLoggedIn(false);
        return;
      } else {
        setLoggedIn(true);
      }

      try {
        const url = `${import.meta.env.VITE_URL_BACKEND}/api/tareas?responsable=${responsable}`;
        const petiicion = await axios.get(url);
        setTareas(petiicion.data);
      } catch (error) {
        console.log(error);
      }
    };
    allowed();
  }, [responsable]);

  const signOut = () => {
    setAuth({});
    setTarea({});
    setTareas({});
    setLoggedIn(false);
    localStorage.removeItem("responsable");
    navigate("/");
  };

  const createItem = async (tarea) => {

    try {
      const url = `${import.meta.env.VITE_URL_BACKEND}/api/tareas/`;
      const petiicion = await axios.post(url, tarea);
      setTareas([...tareas, petiicion.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async (tarea) => {
    const validate = confirm(`Desear borrar la tarea: ${tarea.titulo}`);

    if (!validate) {
      return;
    }

    try {
      const url = `${import.meta.env.VITE_URL_BACKEND}/api/tareas/${tarea.id}`;
      await axios.delete(url, { data: { responsable: auth } });
      setTareas((tareas) =>
      tareas.filter((item) => item.id !== tarea.id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const updateItem = async (tarea) => {
    let flag = false;
    tareas.forEach((t) => {
      {
        if(t.id == tarea.id && t.responsable == auth) {
          flag = true;
        }
      }
    });

    if(!flag) {
      return;
    }
    
    try {
      const url = `${import.meta.env.VITE_URL_BACKEND}/api/tareas/${tarea.id}`;
      const {data} = await axios.put(url, {titulo: tarea.titulo, descripcion: tarea.descripcion, completado: tarea.completado, fecha_de_entrega: tarea.fecha_de_entrega, comentarios: tarea.comentarios ,responsable: auth});
      setTareas((tareas) =>
       tareas.pop((item) => item.id === data.id)
      );
      setTareas([...tareas, data]);
      navigate('/api/tareas');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Context.Provider
      value={{
        auth,
        setAuth,
        loggedIn,
        setLoggedIn,
        tareas,
        tarea,
        setTarea,
        signOut,
        createItem,
        deleteItem,
        updateItem,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context };

export default ContextTareas;
