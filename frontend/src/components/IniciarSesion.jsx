
const IniciarSesion = () => {
  return (
    <>
      <div>
        <form action="/" method="post" className="bg-gray-100 p-8 text-black text-center flex flex-col justify-center items-center shadow-2xl gap-12">
            <legend className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold text-indigo-700 uppercase">iniciar sesion</h1>
                <p className="text-xl capitalize">coloca tu usuario y organiza tus tareas</p>
            </legend>
            <fieldset className="w-full">
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
                    className="p-3 w-full text-black outline-none text-center capitalize rounded-md text-xl"
                     />
                </div>
            </fieldset>
            <input type="submit" value="iniciar sesion" className="text-lg font-bold bg-indigo-700 uppercase text-white p-3 rounded-md w-full"/>
        </form>
      </div>
    </>
  )
}

export default IniciarSesion