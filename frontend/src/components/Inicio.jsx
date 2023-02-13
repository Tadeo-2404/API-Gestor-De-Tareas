import { useState, useContext } from "react";
import { Context } from "../context/ContextProvider";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";

const Inicio = () => {
  const { tareas, auth } = useContext(Context);
  return (
    <>
      {tareas.length > 0 ? (
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="uppercase font-bold text-3xl">
            hola de nuevo!! <span className="text-indigo-700">{auth}</span>
          </h1>
          <div className="grid grid-cols-3 p-2 gap-8 text-lg">
            {tareas.map((tarea) => (
              <div key={tarea.id} className="bg-gray-100 p-2 w-80 text-center grid grid-cols-1 grid-rows-2">
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
                  >
                    <p>eliminar</p>
                    <RiDeleteBin6Line className="text-2xl" />
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 flex items-center justify-around p-2 uppercase"
                  >
                    <p>editar</p>
                    <RiEditLine className="text-2xl" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1>no tienes tareas disponibles, intenta crear una</h1>
        </div>
      )}
    </>
  );
};

export default Inicio;
