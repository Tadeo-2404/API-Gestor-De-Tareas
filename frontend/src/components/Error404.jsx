import { Link, useNavigate } from "react-router-dom";

const Error404 = () => {
  let navigate = useNavigate();

  let goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <p className="text-7xl"><span className="text-blue-600">4</span>0<span className="text-blue-600">4</span></p>
      <h1 className="uppercase font-semibold">esta pagina no esta disponible</h1>
      <div className="flex justify-between text-center w-full">
        <button onClick={goBack} className="bg-blue-600 text-white p-3 font-semibold text-md rounded-xl hover:bg-gradient-to-r hover:from-blue-400 flex items-center justify-center gap-4 uppercase">
          <p>regresar</p>
        </button>
        <Link  to="/" className="bg-blue-600 text-white p-3 font-semibold text-md rounded-xl hover:bg-gradient-to-r hover:from-blue-400 flex items-center justify-center gap-4 uppercase">
          <p>inicio</p>
        </Link>
      </div>
    </div>
  );
};

export default Error404;