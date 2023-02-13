import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Context = createContext();
import axios from 'axios';

const ContextTareas = ({ children }) => {
  const [auth, setAuth] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [tareas, setTareas] = useState([]);
  const navigate = useNavigate();
  const responsable = localStorage.getItem("responsable");

  useEffect(() => {
    const allowed = async () => {
      setAuth(responsable);
      
      if(!responsable) {
        navigate('/');
        setLoggedIn(false);
        return;
      } else {
        navigate('/api/tareas');
        setLoggedIn(true);
      }
    
        try {
            const url = `http://localhost:3000/api/tareas?responsable=${responsable}`;
            const petiicion = await axios.get(url);
            setTareas(petiicion.data);
        } catch (error) {
            console.log(error)
        }
    }
    allowed();
  }, [responsable]);

  const signOut = () => {
    navigate('/');
    setLoggedIn(false);
    localStorage.removeItem('responsable');
  }

  const deleteItem = async (tarea) => {
    const validate = confirm(`Desear borrar la tarea: ${tarea.titulo}`);

    if(!validate) {
      return;
    }

    try {
      const url = `http://localhost:3000/api/tareas/${tarea.id}`;
      const petiicion = await axios.delete(url, {data: {responsable: auth}});
      forceUpdate();
      console.log(petiicion);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Context.Provider value={{ auth, setAuth, loggedIn, setLoggedIn, tareas, signOut, deleteItem}}>
      {children}
    </Context.Provider>
  );
};

export { Context };

export default ContextTareas;
