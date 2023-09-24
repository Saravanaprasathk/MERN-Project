import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Menu } from './Hompage/resuable';
import { Home } from './Hompage/home';
import { Register } from './RegisterPage/registerpage';
import { Login } from './LoginPage/loginpage';
import { Dashboard } from './Dashboard/dashboard';
import { Admin } from './Admin/admin';
import { Service } from './ServiceProvide/service';
import { Adminregister } from './AdminRegister/adminregister';
import { Adminupdate } from './AdminUpdate/adminupdate';
import { Adminboard } from './Dashboard/Admindashboard';
import { Clientupdate } from './CLIENT UPDATE/clientupdate';
import { Clientdetails } from './CLIENT DETAILS/ClientDetails';
import { Booking } from './Booking Now/booking';
import { Bookdetails } from './BOOKING DETAILS/bookdetails';



function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={[<Menu/>]}/>
    <Route path='/Home' element={[<Menu/>,<Home/>]}/>
    <Route path='/Register' element={[<Menu/>,<Register/>]}/>
    <Route path='/Login' element={[<Menu/>,<Login/>]}/>
    <Route path='/Admin' element={[<Menu/>,<Admin/>]}/>
    <Route path='/Dashboard/:id' element={[<Dashboard/>]}/>
    <Route path='/service' element={[<Service/>]}/>

    <Route path='/Clientupdate/:id' element={[<Clientupdate/>]}/>
    <Route path='/Clientdetails' element={[<Clientdetails/>]}/>

    <Route path='/Adminregister' element={[<Adminregister/>]}/>
    <Route path='/Adminupdate/:id' element={[<Adminupdate/>]}/>
    <Route path='/Adminboard/:id' element={[<Adminboard/>]}/>

    <Route path='/Booking' element={[<Booking/>]}/>
    <Route path='/Bookdetails' element={[<Bookdetails/>]}/>


   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
