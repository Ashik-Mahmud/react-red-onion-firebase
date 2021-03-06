import { createContext, useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Toaster } from "react-hot-toast";
import { Route, Routes, useLocation } from 'react-router-dom';
import 'swiper/css';
import './App.css';
import RequireAuth from './Auth/RequireAuth';
import { auth } from './Firebase/Firebase';
import FoodDetails from "./Pages/FoodDetails/FoodDetails";
import Breakfast from './Pages/Home/Foods/Breakfast/Breakfast';
import Dinner from './Pages/Home/Foods/Dinner/Dinner';
import Lunch from './Pages/Home/Foods/Lunch/Lunch';
import Home from './Pages/Home/Home/Home';
import SignIn from './Pages/Login/SignIn/SignIn';
import SignUp from './Pages/Login/SignUp/SignUp';
import Order from './Pages/Order/Order';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';
export const AuthContext = createContext(null);
function App() {
    const location = useLocation();
    const [isAuth, setIsAuth] = useState(false);
    const [user] = useAuthState(auth);
    useEffect(()=>{
        user?.uid ? setIsAuth(true) : setIsAuth(false)
    },[user])

  return (
    <>
    <Toaster />
    <AuthContext.Provider value={{user, isAuth, setIsAuth}}>
    <Navbar />
     <Routes>
         <Route path='/' element={<Home />} >
             <Route index element={<Lunch />} />
             <Route path='lunch' element={<Lunch />} />
             <Route path='dinner' element={<Dinner />} />
             <Route path='breakfast' element={<Breakfast />} />
         </Route>
         <Route path='/home' element={<Home />} />
         <Route path='/food-details/:slug/:foodId' element={<FoodDetails />} />
         <Route path='/login' element={<SignIn />} />
         <Route path='/sign-up' element={<SignUp />} />
         <Route path='/order' element={<RequireAuth><Order /></RequireAuth>} />
     </Routes>
     {!location?.pathname.includes("food-details") && <Footer />}
     </AuthContext.Provider>
    </>
  );
}

export default App;
