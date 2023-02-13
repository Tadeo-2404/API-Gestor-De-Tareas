import { useState, useContext } from "react";
import { Context } from "../context/ContextProvider";

const Crear = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [completado, setCompletado] = useState(false);
  const [fecha_de_entrega, setFecha_de_entrega] = useState("");
  const [comentarios, setComentarios] = useState("");

  const [errorTitulo, setErrorTitulo] = useState({});
  const [errorDescripcion, setErrorDescripcion] = useState({});
  const [errorFecha, setErrorFecha] = useState({});
  const [errorComentarios, setErrorComentarios] = useState({});
  const { auth, createItem } = useContext(Context);
  

  const handleCheck = () => setCompletado(!completado);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!titulo || !descripcion || !fecha_de_entrega) {
      setErrorTitulo({ msg: "este campo es obligatorio" });
      setErrorDescripcion({ msg: "este campo es obligatorio" });
      setErrorFecha({ msg: "este campo es obligatorio" });
      setTimeout(() => {
        setErrorTitulo({});
        setErrorDescripcion({});
        setErrorFecha({});
      }, 2500);
      return;
    }

    if (titulo.length < 4 || titulo.length > 100) {
      setErrorTitulo({ msg: "el titulo debe contener 4-20 caracteres" });
      setTimeout(() => {
        setErrorTitulo({});
      }, 2500);
      return;
    }

    if (descripcion.length < 4 || descripcion.length > 100) {
        setErrorDescripcion({ msg: "la descripcion debe contener 4-100 caracteres" });
        setTimeout(() => {
          setErrorDescripcion({});
        }, 2500);
        return;
    }

    if (comentarios.length < 4 || comentarios.length > 100) {
        setComentarios({ msg: "el comentario debe contener 4-100 caracteres" });
        setTimeout(() => {
          setErrorComentarios({});
        }, 2500);
        return;
    }

    createItem({titulo: titulo, descripcion: descripcion, fecha_de_entrega: fecha_de_entrega, completado: completado, comentarios: comentarios, responsable: auth});
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
              crear tarea
            </h1>
            <p className="text-xl capitalize sm:text-xl">
              crea una tarea colocando la informacion
            </p>
          </legend>
          <fieldset className="w-full flex flex-col gap-4">
            <div>
              {Object.keys(errorTitulo).length !== 0 ? (
                <div className="flex flex-col justify-between items-start gap-4 w-full">
                  <label htmlFor="titulo" className="capitalize text-xl">
                    titulo
                  </label>
                  <div className="flex flex-col justify-center text-center w-full gap-3">
                    <input
                      type="text"
                      required
                      minLength="4"
                      maxLength="20"
                      id="titulo"
                      name="titulo"
                      placeholder="titulo"
                      className="p-3 w-full text-red-500 border-red-500 border-2 text-center rounded-md text-xl"
                      value={titulo}
                      onChange={(event) => setTitulo(event.target.value)}
                    />
                    <p className="text-red-500">{errorTitulo.msg}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col justify-between items-start gap-4 w-full">
                  <label htmlFor="titulo" className="capitalize text-xl">
                    nombre
                  </label>
                  <input
                    type="text"
                    required
                    minLength="4"
                    maxLength="20"
                    id="titulo"
                    name="titulo"
                    placeholder="titulo"
                    className="p-3 w-full text-black outline-none text-center rounded-md text-xl"
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)}
                  />
                </div>
              )}
            </div>

            <div>
              {Object.keys(errorFecha).length !== 0 ? (
                <div className="flex flex-col justify-between items-start gap-4 w-full">
                  <label htmlFor="fecha" className="capitalize text-xl">
                    fecha
                  </label>
                  <div className="flex flex-col justify-center text-center w-full gap-3">
                    <input
                      type="date"
                      required
                      id="fecha"
                      name="fecha"
                      className="p-3 w-full text-black outline-none text-center rounded-md text-xl"
                      value={fecha_de_entrega}
                      onChange={(event) =>
                        setFecha_de_entrega(event.target.value)
                      }
                    />
                    <p className="text-red-500">{errorFecha.msg}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col justify-between items-start gap-4 w-full">
                  <label htmlFor="fecha" className="capitalize text-xl">
                    fecha
                  </label>
                  <input
                    type="date"
                    required
                    id="fecha"
                    name="fecha"
                    className="p-3 w-full text-black outline-none text-center rounded-md text-xl"
                    value={fecha_de_entrega}
                    onChange={(event) =>
                      setFecha_de_entrega(event.target.value)
                    }
                  />
                </div>
              )}
            </div>

            <div className="flex justify-between items-center gap-4 w-full">
              <label htmlFor="completado" className="capitalize text-xl">
                completado
              </label>
              <input
                type="checkbox"
                id="completado"
                name="completado"
                className="p-3 w-full text-black outline-none text-center rounded-md text-xl"
                onClick={handleCheck}
              />
            </div>

            <div>
              {Object.keys(errorDescripcion).length !== 0 ? (
                <div className="flex flex-col justify-between items-start gap-4 w-full">
                  <label htmlFor="descripcion" className="capitalize text-xl">
                    descripcion
                  </label>
                  <div className="flex flex-col justify-center text-center w-full gap-3">
                    <textarea
                      name="descripcion"
                      id="descripcion"
                      cols="5"
                      rows="5"
                      minLength="4"
                      maxLength="100"
                      className="p-3 w-full text-black outline-none text-center rounded-md text-md"
                      value={descripcion}
                      onChange={(event) => setDescripcion(event.target.value)}
                      required
                    ></textarea>
                    <p className="text-red-500">{errorDescripcion.msg}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col justify-between items-start gap-4 w-full">
                  <label htmlFor="descripcion" className="capitalize text-xl">
                    descripcion
                  </label>
                  <textarea
                    name="descripcion"
                    id="descripcion"
                    cols="5"
                    rows="5"
                    minLength="4"
                    maxLength="100"
                    className="p-3 w-full text-black outline-none text-center rounded-md text-md"
                    value={descripcion}
                    onChange={(event) => setDescripcion(event.target.value)}
                    required
                  ></textarea>
                </div>
              )}
            </div>

            <div>
              {Object.keys(errorComentarios).length !== 0 ? (
                <div className="flex flex-col justify-between items-start gap-4 w-full">
                  <label htmlFor="comentarios" className="capitalize text-xl">
                    comentarios
                  </label>
                  <div className="flex flex-col justify-center text-center w-full gap-3">
                    <textarea
                      name="comentarios"
                      id="comentarios"
                      cols="5"
                      rows="5"
                      minLength="4"
                      maxLength="100"
                      className="p-3 w-full text-black outline-none text-center rounded-md text-md"
                      value={comentarios}
                      onChange={(event) => setComentarios(event.target.value)}
                    ></textarea>
                    <p className="text-red-500">{errorComentarios.msg}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col justify-between items-start gap-4 w-full">
                  <label htmlFor="comentarios" className="capitalize text-xl">
                    comentarios
                  </label>
                  <textarea
                    name="comentarios"
                    id="comentarios"
                    cols="5"
                    rows="5"
                    minLength="4"
                    maxLength="100"
                    className="p-3 w-full text-black outline-none text-center rounded-md text-md"
                    value={comentarios}
                    onChange={(event) => setComentarios(event.target.value)}
                  ></textarea>
                </div>
              )}
            </div>
          </fieldset>
          <input
            type="submit"
            value="crear"
            className="text-lg font-bold bg-indigo-700 uppercase text-white p-3 rounded-md w-full"
          />
        </form>
      </div>
    </>
  );
};

export default Crear;
