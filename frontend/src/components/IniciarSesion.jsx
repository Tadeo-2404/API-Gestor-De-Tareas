//libraries
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';

//components
import { Context } from "../context/ContextProvider";

const IniciarSesion = () => {
  //variables
  const [usuario, setUsuario] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const {setAuth, setLoggedIn} = useContext(Context); //get context

  //handle submit from form
  const handleSubmit = async (event) => {
    event.preventDefault();

    //usuario not empty validation
    if (!usuario) {
      setError({ msg: "todos los campos son obligatorios" });
      setTimeout(() => {
        setError({});
      }, 2500);
      return;
    }

    //usuario length validation
    if (usuario.length < 4 || usuario.length > 20) {
      setError({ msg: "el usuario debe contener 4-20 caracteres" });
      setTimeout(() => {
        setError({});
      }, 2500);
      return;
    }

    try {
      await localStorage.setItem("responsable", usuario); //store usuario in localStorage
      setLoggedIn(true); //loggeIn set true
      setAuth(usuario); //pass usuario to context
      navigate('/api/tareas'); //redirect user
    } catch (error) {
      setError(error);
    }
  };
  return (
    <>
      <div>
        <form
          action="/"
          method="post"
          className="bg-gray-100 p-8 text-black text-center flex flex-col justify-center items-center shadow-2xl gap-12"
          onSubmit={handleSubmit}
        >
          <legend className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold text-indigo-700 uppercase sm:text-2xl">
              iniciar sesion
            </h1>
            <p className="text-xl capitalize sm:text-xl">
              coloca tu usuario y organiza tus tareas
            </p>
          </legend>
          <fieldset className="w-full">
            {/* usuario field */}
            {Object.keys(error).length !== 0 ? (
              <div className="flex flex-col justify-between items-start gap-4 w-full">
                <label htmlFor="usuario" className="capitalize text-xl">
                  nombre
                </label>
                <div className="flex flex-col justify-center text-center w-full gap-3">
                  <input
                    type="text"
                    required
                    minLength="3"
                    maxLength="20"
                    id="usuario"
                    name="usuario"
                    placeholder="coloca tu nombre"
                    className="p-3 w-full text-red-500 border-red-500 border-2 text-center rounded-md text-xl"
                    value={usuario}
                    onChange={(event) => setUsuario(event.target.value)}
                  />
                  <p className="text-red-500">{error.msg}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-between items-start gap-4 w-full">
                <label htmlFor="usuario" className="capitalize text-xl">
                  nombre
                </label>
                <input
                  type="text"
                  required
                  minLength="3"
                  maxLength="20"
                  id="usuario"
                  name="usuario"
                  placeholder="coloca tu nombre"
                  className="p-3 w-full text-black outline-none text-center rounded-md text-xl"
                  value={usuario}
                  onChange={(event) => setUsuario(event.target.value)}
                />
              </div>
            )}
          </fieldset>
          <input
            type="submit"
            value="iniciar sesion"
            className="text-lg font-bold bg-indigo-700 uppercase text-white p-3 rounded-md w-full"
          />
        </form>
      </div>
    </>
  );
};

export default IniciarSesion;
