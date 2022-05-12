import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../Services/api";

import "./styles.css";

import gif from "../../Assets/gif.gif";

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "86da2cf4cf000ed3bc664a7dd307a24b",
          language: "pt-BR",
          page: 1,
        },
      });
      setFilmes(response.data.results);
    }
    loadFilmes();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    );
  }

  return (
    <>
      <div>
        <div className="movie-wrapper">
          <div className="img-wrapper">
            <img src={gif} />
          </div>
          <div className="text-wrapper">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6b9c185c-8774-434d-a93c-ec9be5fab48e/dee1lue-ff6f2b0b-036a-4e1c-b3e3-26cacfadb8fc.png/v1/fill/w_1280,h_466,strp/sonic_2_logo_official_by_tailsgene19_dee1lue-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDY2IiwicGF0aCI6IlwvZlwvNmI5YzE4NWMtODc3NC00MzRkLWE5M2MtZWM5YmU1ZmFiNDhlXC9kZWUxbHVlLWZmNmYyYjBiLTAzNmEtNGUxYy1iM2UzLTI2Y2FjZmFkYjhmYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.auehg3JM4qEuPaH7M18n9Q5DGXGil0AWHcCnYa3Csik" />
            <a href="https://www.youtube.com/results?search_query=Sonic+2%3A+O+Filme+Trailer" target='noreferrer' className="button-home">
              <i className="bx bx-play"></i> Ver trailer
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="lista-filmes">
          {filmes.map((filme) => {
            return (
              <article key={filme.id}>
                <strong>{filme.title}</strong>
                <img
                  src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                  alt={filme.title}
                />
                <Link to={`/filme/${filme.id}`}>Acessar</Link>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}
