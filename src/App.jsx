import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import { Route,Routes } from 'react-router';
import Logins from './Components/Login';
import DashBoard from './Components/DashBoard';
import Users from './Components/User Management/Users';
import Add_Users from './Components/User Management/Add_Users';
import Edit_Users from './Components/User Management/Edit_Users';
import Patients from './Components/Patient Management/Patients';
import Appointment from './Components/Appointment';
import Profile from './Components/Profile';
import PatientProfile from './Components/Patient Management/PatientProfile';
import Add_Patient from './Components/Patient Management/Add_Patients';
import Doctor_Profiles from './Components/Doctor Management/Doctor_Profiles';
import Doctors from './Components/Doctor Management/Doctors';
import Settings from './Components/Settings/Settings';
import Edit_patients from './Components/Patient Management/Edit_patients';
import Master from './Components/User Management/Master';
import UserDetail from './Components/User Management/UserDetail';
import PasswordChange from './Components/Settings/PasswordChange';
import PermissionManagement from './Components/Settings/PermissionManagement';
function App() {


  return (
    <div className='m-0 '>
   <Routes>
        <Route path="*" element={<Home />}>
          <Route index element={<DashBoard />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />}>
            <Route path='user/:id' element={<UserDetail/>}></Route>
            <Route path="adduser" element={<Add_Users />} />
            <Route path="editusers" element={<Edit_Users />} />
            <Route path="master" element={<Master />} />
            
          </Route>
          <Route path="doctorship" element={<Doctors />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="profile" element={<Profile />} />
          <Route path="patients" element={<Patients />} />
          <Route path="patient/:id" element={<PatientProfile />} />
          <Route path="additament" element={<Add_Patient />} />
          <Route path="d-profile/:id" element={<Doctor_Profiles />} />
          <Route path='settings' element={<Settings/>}></Route>
          <Route path='change_password' element={<PasswordChange/>}></Route>
          <Route path='permission-management' element={<PermissionManagement/>}></Route>

          <Route path='editpatient/:id' element={<Edit_patients/>}></Route>

        </Route>
        
        <Route path="/login" element={<Logins />} />
      </Routes>
    </div>
  )
}

export default App
