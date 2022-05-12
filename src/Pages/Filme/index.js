import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

import api from '../../Services/api';

import './styles.css'

export default function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();

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
          navigate('/', { replace: true });
          return;
        })
    }
    loadFilme()
    return () => {
    }
  }, [])

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@fujiflix")

    let filmeSalvos = JSON.parse(minhaLista) || [];

    const hasFilmes = filmeSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id)

    if(hasFilmes){
      toast.warn("Esse filme já está na sua lista!", {
        theme: "colored"
      });
      return;
    }

    filmeSalvos.push(filme)
    localStorage.setItem("@fujiflix", JSON.stringify(filmeSalvos));
    toast.success("Filme salvo com sucesso!", {
      theme: "colored"
    });

  }

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
          <button onClick={salvarFilme}>
            Salvar
          </button>
          <button>
            <a href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
              target="_blank"
              rel='noreferrer'>
              Trailer
            </a>
          </button>
        </div>

      </div>
    </>
  );
}
