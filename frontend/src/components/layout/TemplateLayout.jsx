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
        <div className='m-10 flex flex-col justify-center items-center'>
         <Outlet />
        </div>
    </div>
  )
}

export default TemplateLayout