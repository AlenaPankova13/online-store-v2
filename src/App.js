import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Candels from './Candels';
import Cart from './Cart';
import About from './About';
import Contact from './Contact';


function App() {
  return <Router>
    <nav>
      <Link className='link' to='/'>Shop</Link>
      <Link className='link' to='/cart'>Cart</Link>
      <Link className='link' to='/about'>About</Link>
      <Link className='link' to='/contact'>Contact us</Link>
    </nav>

    <Routes>
      <Route path='/' element={<Candels/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  </Router>
}

export default App;
