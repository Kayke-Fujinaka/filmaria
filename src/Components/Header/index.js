import React from 'react';

import { Link } from 'react-router-dom'

import './styles.css'


export default function Header() {
  return (
    <>
      <header>
          <Link className='logo' to='/' >FujiFlix</Link>
        <Link className='favoritos' to='favoritos'>Filmes Salvos</Link>
      </header>
    </>
  );
}