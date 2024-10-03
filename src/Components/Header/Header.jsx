import React from 'react';
import './header.css';
import { AiOutlineHome } from 'react-icons/ai';
import { MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='site__header flex-center'>
      <article className='container flex-center'>
        <img
          src='./img/logo-dragonBallZ.png'
          alt='logo dragon ball z'
          className='site__header-logo'
        />

        <nav className='site__header-nav flex-center'>
          <Link to='/' className='flex-center button-light'>
            <AiOutlineHome className='icon' />
            <span>Inicio</span>
          </Link>
          <Link to='/add-new' className='flex-center button-light'>
            <MdAdd className='icon' />
            <span>Nuevo Video</span>
          </Link>
        </nav>
      </article>
    </header>
  );
};

export default Header;
