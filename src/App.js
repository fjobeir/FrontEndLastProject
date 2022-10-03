import './App.css';
import Register from './components/SignUp/Register.js';
import LogIn from './components/LogIn/LogIn';
import Home from './components/Home/Home';
import {Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import { useContext } from 'react';
import { AuthContext } from './components/AuthContext/AuthContext';
import Comments from './components/Comment/Comments';
import UpdateProfile from './components/Profile/UpdateProfile';

function App() {
  
  const {loggedIn} =useContext(AuthContext)
  return (
    <Routes>  
      {!loggedIn && <Route path='/' element={<Register />}></Route>}
      <Route path='/login' element={<LogIn />} />
      {loggedIn && <Route path='/' element={<Home />}></Route>}
      {loggedIn && <Route path='/profile' element={<UpdateProfile />} />}
      {loggedIn && <Route path='/comments' element={<Comments />} />}
      {loggedIn &&<Route path='/c' element={<Sidebar />} />}
      {loggedIn &&<Route path='/register' element={<Register />} />}
    </Routes>
  );
}

export default App;
