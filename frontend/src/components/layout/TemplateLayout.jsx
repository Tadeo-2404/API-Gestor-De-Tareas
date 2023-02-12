import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';
const TemplateLayout = () => {
  return (
    <div>
        <NavBar />
        <div className='bg-gray-200 p-10 h-screen'>
         <Outlet />
        </div>
    </div>
  )
}

export default TemplateLayout