import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Contact from './Contact';
import Shop from './Shop';
import Home from './Home';


function App() {

  return (
    <div className='container'>
      <Router>
        <nav className='cont'>
          <Link to="/" className='link'>Home</Link>
          <Link to="/shop" className='link'>Shop</Link>
          <Link to="/contact" className='link'>Contact</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
