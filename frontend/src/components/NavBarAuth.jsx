import {Link} from 'react-router-dom';
import { Context } from "../context/ContextProvider"
import { useContext } from 'react';

const NavBarAuth = () => {
  const { signOut } = useContext(Context);
  return (
    <div className="bg-yellow-500 w-full p-8 flex justify-center font-bold text-white uppercase text-2xl">
        <div className='w-full'>
            <h1>gestor de tareas</h1>
        </div>
        <div className='flex justify-around w-full'>
            <Link to="/api/tareas">Inicio</Link>
            <Link onClick={signOut}>Salir</Link>
        </div>
    </div>
  )
}

export default NavBarAuth