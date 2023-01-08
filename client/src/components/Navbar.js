import React, { useContext, useState } from 'react';
import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useAppContext } from '../context/appContext';
import Logo from './Logo';

const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <button
          className='toggle-btn'
          onClick={() => console.log('toggle sidebar')}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className='logo-text'>dashboard</h3>
        </div>
        <div className='btn-container'>
          <button className='btn' onClick={() => console.log('show logout')}>
            <FaUserCircle />
            phil
            <FaCaretDown />
          </button>
          <div className='dropdown show-dropdown'>
            <button
              className='dropdown-btn'
              onClick={() => console.log('logout user')}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
