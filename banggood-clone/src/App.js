import React from 'react';
import './App.css';
import Home from './Components/home';
import PaymentPage from './Components/payment'
import SignUpPage from './Components/signup';
import RegistrationPage from './Components/register';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
   
<Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<RegistrationPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
      </Routes>
  );
}

export default App;
