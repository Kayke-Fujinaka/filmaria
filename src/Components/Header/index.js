import React from 'react';

import { Link } from 'react-router-dom'

import './styles.css'


export default function Header() {
  return (
    <>
      <header>
          <Link className='logo' to='/' >FujiFlix</Link>
          <ul className='navHeader'>
            <li>Início</li>
            <li>Filmes</li>
            <li>Séries</li>
            <li>Aplicativos</li>
          </ul>
        <Link className='favoritos' to='favoritos'>Filmes Salvos</Link>
      </header>
    </>
  );
}