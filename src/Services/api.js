import axios from 'axios'

// BASE DA API: https://api.themoviedb.org/3/
// URL DA API: movie/now_playing?api_key=86da2cf4cf000ed3bc664a7dd307a24b&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;