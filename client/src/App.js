import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,Navigate
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import PrivateRoute from './services/PrivateRoute';
export default function App() {
  return (
   
 

     <BrowserRouter>
        <Routes>
        <Route element={<PrivateRoute/>}>
            <Route path="/app" element={<HomePage />} />
       
          </Route>  
          <Route path="/" element={<loginPage />}  />
              <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
        </Routes>
      </BrowserRouter>
 
  );
}

