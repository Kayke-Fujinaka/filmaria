import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import api from '../../Services/api'

import './styles.css'

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadFilmes() {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: '86da2cf4cf000ed3bc664a7dd307a24b',
          language: 'pt-BR',
          page: 1,
        }
      })
      setFilmes(response.data.results);
    }
    loadFilmes();
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className='loading'>
        <h2>Carregando filmes...</h2>
      </div>
    )
  } 

  return (
    <>
      <div className='container'>
        <div className='lista-filmes'>
          {filmes.map((filme) => {
            return (
              <article key={filme.id}>
                <strong>{filme.title}</strong>
                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                <Link to={`/filme/${filme.id}`}>Acessar</Link>
              </article>
            )
          })}
        </div>
      </div>
    </>
  );
}