import { Route, Routes } from 'react-router-dom';
import './App.css';
import Breakfast from './Pages/Home/Foods/Breakfast/Breakfast';
import Dinner from './Pages/Home/Foods/Dinner/Dinner';
import Lunch from './Pages/Home/Foods/Lunch/Lunch';
import Home from './Pages/Home/Home/Home';
import SignIn from './Pages/Login/SignIn/SignIn';
import SignUp from './Pages/Login/SignUp/SignUp';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar />
     <Routes>
         <Route path='/' element={<Home />} >
             <Route index element={<Lunch />} />
             <Route path='lunch' element={<Lunch />} />
             <Route path='dinner' element={<Dinner />} />
             <Route path='breakfast' element={<Breakfast />} />
         </Route>
         <Route path='/home' element={<Home />} />
         <Route path='/login' element={<SignIn />} />
         <Route path='/sign-up' element={<SignUp />} />
     </Routes>
     <Footer />
    </>
  );
}

export default App;
