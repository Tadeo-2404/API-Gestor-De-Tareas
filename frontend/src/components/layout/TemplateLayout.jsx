import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import NavBar from '../NavBar';
import NavBarAuth from '../NavBarAuth';
import { Context } from '../../context/ContextProvider';

const TemplateLayout = () => {
  const {loggedIn} = useContext(Context);
  return (
    <div>
        {loggedIn ? <NavBar /> : <NavBarAuth />}
        <div className='p-10 h-screen flex flex-col justify-center items-center'>
         <Outlet />
        </div>
    </div>
  )
}

export default TemplateLayout