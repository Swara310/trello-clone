import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/auth';
import './Navbar.css'

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  if (!isAuthenticated) {
    return '';
  }

  return (
    <nav className='navbar'>
      <div className='nav-left'>
        <Link to='/dashboard' className='nav-title'>TrelloClone</Link>
      </div>
      <div className='nav-right'>
        <Link to='/dashboard'>Home</Link>
        <button className='logout-btn' onClick={() => dispatch(logout())}>
          Logout
        </button>
      </div>
    </nav>
  );  
};

export default Navbar;
