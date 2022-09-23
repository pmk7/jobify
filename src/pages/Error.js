import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  return (
    <Wrapper classname='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>404</h3>
        <p>oops page not found</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
