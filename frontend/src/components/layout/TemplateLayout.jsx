import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';
import NavBarAuth from '../NavBarAuth';
const TemplateLayout = () => {
  const user = localStorage.getItem('responsable');
  return (
    <div>
        {user ? <NavBar /> : <NavBarAuth />}
        <div className='p-10 h-screen flex flex-col justify-center items-center'>
         <Outlet />
        </div>
    </div>
  )
}

export default TemplateLayout