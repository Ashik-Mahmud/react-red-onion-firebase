import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import SignIn from './Pages/Login/SignIn/SignIn';
import SignUp from './Pages/Login/SignUp/SignUp';
import Navbar from './Shared/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar />
     <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/home' element={<Home />} />
         <Route path='/login' element={<SignIn />} />
         <Route path='/sign-up' element={<SignUp />} />
     </Routes>
    </>
  );
}

export default App;
