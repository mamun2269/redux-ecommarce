import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Details from './Components/Details/Details';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import LadiesItem from './Components/LadiesItem/LadiesItem';
import JensItem from './Components/JensItem/JensItem';
import LoginForm from './Components/LoginForm/LoginForm';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';




function App() {
  return (
    <>
      <Router>
          <Navbar/>
          <Routes>
            <Route path='/'  element={<Home/>}/>
            <Route path='/cart'  element={<Cart/>}/>
            <Route path='/details/:id'  element={<Details/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/ladies'  element={<LadiesItem/>}/>
            <Route path='/jens'  element={<JensItem/>}/>
            <Route path='/login'  element={<LoginForm/>}/>
          </Routes>

      </Router>
    </>
  );
}

export default App;
