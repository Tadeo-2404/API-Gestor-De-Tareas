import {Link} from 'react-router-dom';
import { Context } from "../context/ContextProvider"
import { useContext, useState } from 'react';
import { TfiMenu } from 'react-icons/tfi';
const NavBarAuth = () => {
  const { signOut } = useContext(Context);
  const [ toggle, setToggle] = useState(false);
  const show = () => {
    setToggle(!toggle);
  }
  return (
    <div className="bg-yellow-500 w-full p-8 flex justify-center font-bold text-white uppercase text-center text-2xl sm:flex-col">
        <div className='w-full sm:flex sm:justify-between sm:items-center'>
            <h1>gestor de tareas</h1>
            <TfiMenu className="text-2xl sm:block hidden" onClick={show}/>
        </div>
        {toggle && (
          <div className='flex justify-around w-full sm:mt-5 sm:gap-5'>
            <Link to="/api/tareas">Inicio</Link>
            <Link onClick={signOut}>Salir</Link>
          </div>
        )}
        <div className='flex justify-around w-full sm:mt-5 sm:gap-5 sm:hidden'>
            <Link to="/api/tareas">Inicio</Link>
            <Link onClick={signOut}>Salir</Link>
        </div>
    </div>
  )
}

export default NavBarAuth