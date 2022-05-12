import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css'

export default function Error() {
  return (
    <>
      <div className='notFound'>
        <h1>Error 404</h1>
        <h2>Página não encontrada!</h2>
        <Link to='/'>Veja todos os Filmes</Link>
      </div>
    </>
  );
}