import './App.css';
import TimeLine from './pages/TimeLine';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import UpdateUserForm from './pages/UpdateUserForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        
        <Route exact path="/" element={<Login />}/>
          
          <Route  path="/register" element={<Register />} />
          <Route  path="/profile/:id" element={<Profile />} />
          <Route  path="/timeline/:id" element={<TimeLine />} />
          <Route  path="/user/update/:id" element={<UpdateUserForm/>} />
      </Routes>
    </BrowserRouter>
    
    
   
    
   
    
    </>
  );
}

export default App;
