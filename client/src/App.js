
import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layouts/Alerts';
function App() {
  return (
    <div className="App">

      <Navbar title="Contact Keeper" icon="fa-solid fa-address-card"/>
      <div className='container'>
        <Alerts />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="about" element={ <About/> } />
          <Route path="register" element={ <Register/> } />
          <Route path="login" element={ <Login/> } />
        </Routes>
    
      </div>
  
    </div>
  );
}

export default App;
