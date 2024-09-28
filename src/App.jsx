import './App.css'
import About from './Components/About'
import Contents from './Components/Content'
import Home from './Components/Home'
import { Route,Routes } from 'react-router'
import Logins from './Components/Login'
import DashBoard from './Components/DashBoard'
import {useEffect} from'react';
import Users from './Components/User Management/Users'
import Add_Users from './Components/User Management/Add_Users'
import Edit_Users from './Components/User Management/Edit_Users'
import Delete_Users from './Components/User Management/Delete_Users'
import Patients from './Components/Patient Management/Patients'
function App() {
  useEffect(() => {
    // const handleKeyDown = (event) => {
    //   // Check if the key pressed is 'Backspace'
    //   if (event.key === 'Backspace') {
    //     event.preventDefault(); // Prevent the default backspace behavior
    //     window.history.back(); // Go back in history
    //   }
    // };

    // Add the event listener for keydown
    // window.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener on component unmount
    // return () => {
    //   window.removeEventListener('keydown', handleKeyDown);
    // };
  }, []);

  return (
    <div className='m-0'>
    <Routes>
      <Route path='' element={<Home/>}>
      <Route path='/' element={<DashBoard/>}></Route>
      <Route path='about' element={<About/>}></Route>
      {/* Product Management */}
      <Route path='/users' element={<Users/>}>
      <Route path='/users/adduser' element={<Add_Users/>}></Route>
      </Route>
      <Route path='editusers' element={<Edit_Users/>}></Route>
      <Route path='deleteusers' element={<Delete_Users/>}></Route>
      <Route path='patients' element={<Patients/>}></Route>
      <Route path='content' element={<Contents/>}></Route>
      </Route>
      <Route path='/login' element={<Logins/>}></Route>
    </Routes>  
    </div>
  )
}

export default App
