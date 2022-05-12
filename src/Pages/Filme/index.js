import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../Services/api';

import './styles.css'

export default function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: '86da2cf4cf000ed3bc664a7dd307a24b',
          language: 'pt-BR',
        }
      })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("FILME NÃO ENCONTRADO")
        })
    }
    loadFilme()
    return () => {
      console.log("COMPONENTE DESMONTADO")
    }
  }, [])

  if (loading) {
    return (
      <div className='filmeInfo'>
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }

  return (
    <>
      <div className='filmeInfo'>
        <h1>{filme.title}</h1>
        <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

        <h3>Sinopse</h3>
        <span>{filme.overview}</span>

        <strong>Avaliação: {filme.vote_average}/10</strong>

        <div className='btnArea'>
          <button>Salvar</button>
          <button>
            <a href="#">
              Trailer
            </a>
          </button>
        </div>

      </div>
    </>
  );
}
