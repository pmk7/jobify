import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobify' className='logo' />
        <div className='container page'>
          <div className='info'>
            <h1>
              job <span>tracking</span>app
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              amet incidunt earum totam neque alias dolore, debitis est quas
              ipsum placeat consequatur nesciunt deleniti quaerat repellat illum
              nam, aliquid ducimus!
            </p>
            <button className='btn btn-hero'>Login/Register</button>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: 3rem;
  }

  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;
