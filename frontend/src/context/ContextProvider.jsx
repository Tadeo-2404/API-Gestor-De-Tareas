import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Context = createContext();

const ContextTareas = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  console.log(loggedIn)

  useEffect(() => {
    const allowed = () => {
        for (let i = 0; i < localStorage.length; i++) {
            (localStorage.key(i) == "responsable" && localStorage.getItem(localStorage.key(i) != '') ? setLoggedIn(true) : setLoggedIn(false));
        }
    }
    allowed();

    if(!loggedIn) {
        navigate('/');
    }

  }, [])
  

  return (
    <Context.Provider value={{ auth, setAuth, loggedIn, setLoggedIn }}>
      {children}
    </Context.Provider>
  );
};

export { Context };

export default ContextTareas;
