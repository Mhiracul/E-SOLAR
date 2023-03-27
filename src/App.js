import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
//import Hero from "./components/Hero"
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/Auth';
import Account from './pages/Account';
import Protected from './components/Protected';
import VerifyEmail from './pages/VerifyEmail';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import AboutUs from './pages/AboutUs';
function App() {
  return (
    <div className="App">
              

      <AuthProvider>
      <Router>
               <Navbar />
               
               
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about-us" element={<AboutUs />} />
     
        <Route
            path='/account'
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
        </Routes>
       
        <Footer />
        </Router>
        </AuthProvider>

    </div>
  );
}

export default App;
