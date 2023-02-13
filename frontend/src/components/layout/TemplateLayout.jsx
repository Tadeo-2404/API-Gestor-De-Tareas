import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/ContextProvider';
import NavBar from '../NavBar';
import NavBarAuth from '../NavBarAuth';

const TemplateLayout = () => {
  const {loggedIn} = useContext(Context);
  return (
    <div>
        {loggedIn ? <NavBarAuth /> : <NavBar />}
        <div className='m-10 flex flex-col justify-center items-center'>
         <Outlet />
        </div>
    </div>
  )
}

export default TemplateLayout