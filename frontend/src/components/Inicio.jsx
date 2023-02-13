//libraries
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";

//components
import { Context } from "../context/ContextProvider";
import Crear from "./Crear";

const Inicio = () => {
  //variables
  const { tareas, auth, deleteItem, setTarea } = useContext(Context); //get context
  const [mostrar, setMostrar] = useState(false);
  const navigate = useNavigate(); //navigate

  //function show form
  const handleClickMostrar = () => {
    setMostrar(!mostrar);
  };

  //function delete item
  const handleClick = (e, data) => {
    deleteItem(data);
  };

  //function update item
  const handleClickUpdate = (e, data) => {
    setTarea(data);
    navigate(`/api/tareas/${data.id}`);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-center sm:flex sm:flex-col sm:gap-4">
          <h1 className="uppercase font-bold text-3xl">
            hola!! <span className="text-indigo-700">{auth}</span>
          </h1>
          <p className="uppercase text-xl">
            Puedes crear una tarea o puedes editar las que ya tienes
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <button
            className="text-lg font-bold bg-indigo-700 uppercase text-white p-3 rounded-md w-fit mb-10"
            onClick={handleClickMostrar}
          >
            agregar tarea
          </button>

          {/* show form Crear */}
          {mostrar && <Crear />}

          {tareas.length > 0 ? (
            <div className="text-center flex flex-col justify-center items-center mt-20 gap-5">
              <h1 className="uppercase font-bold text-3xl">tus tareas</h1>

              {/* iterate over array tareas contextProvider */}
              <div className="grid grid-cols-3 grid-flow-col p-2 gap-8 text-lg sm:flex sm:flex-col">
                {tareas.map((tarea) => (
                  <div
                    key={tarea.id}
                    className="bg-gray-100 p-2 text-center grid grid-cols-1 grid-rows-2"
                  >
                    <div className="flex flex-col row-span-2">
                      <div className="flex flex-col justify-between items-center p-2">
                        <h1 className="uppercase font-bold">titulo</h1>
                        <p>{tarea.titulo}</p>
                      </div>
                      <div className="flex flex-col justify-between items-center p-2">
                        <h1 className="uppercase font-bold">descripcion</h1>
                        <p>{tarea.descripcion}</p>
                      </div>
                      <div className="flex flex-col justify-between items-center p-2">
                        <h1 className="uppercase font-bold">fecha</h1>
                        <p>{tarea.fecha_de_entrega}</p>
                      </div>
                      {tarea.comentarios && (
                        <div className="flex flex-col justify-between items-center p-2">
                          <h1 className="uppercase font-bold">comentarios</h1>
                          <p>{tarea.comentarios}</p>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-white mt-4">
                      <button
                        type="submit"
                        className="bg-red-500 flex items-center justify-around p-2 uppercase"
                        value={tarea.id}
                        onClick={(e) => handleClick(e, tarea)}
                      >
                        <p className="sm:text-sm">eliminar</p>
                        <RiDeleteBin6Line className="text-2xl sm:text-xl" />
                      </button>
                      <button
                        type="submit"
                        className="bg-blue-500 flex items-center justify-around p-2 uppercase"
                        value={tarea.id}
                        onClick={(e) => handleClickUpdate(e, tarea)}
                      >
                        <p className="sm:text-sm">editar</p>
                        <RiEditLine className="text-2xl sm:text-xl" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="uppercase font-bold text-3xl">
                no tienes tareas disponibles, intenta crear una
              </h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Inicio;
