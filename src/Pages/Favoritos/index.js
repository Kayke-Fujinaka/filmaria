import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import './styles.css'

export default function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem('@fujiflix')
    setFilmes(JSON.parse(minhaLista) || [])
  }, [])

  function excluirFilme(id) {
    let filtroFilmes = filmes.filter((item) => {
      return (item.id !== id)
    })

    setFilmes(filtroFilmes)
    localStorage.setItem('@fujiflix', JSON.stringify(filtroFilmes))
  }

  return (
    <>
      <div className='containerList'>
        <h1>Meus Filmes Salvos</h1>

        {filmes.length === 0 && <span>Você ainda não possui nenhum filme salvo!</span>}

        <ul>
          {filmes.map((item) => {
            return (
              <li key={item.id}>
                <span>{item.title}</span>
                <div>
                  <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>
                  <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
}
