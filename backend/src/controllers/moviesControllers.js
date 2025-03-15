import {getPopularMovies} from '../services/moviesService.js';

export const getMoveis = async (request, response)=>{
    try {
        const movies = await getPopularMovies();
        response.status(200).json(movies);
        
    } catch (error) {
        console.error("Erro no controller de filmes: ", error);
        response.status(500).json({error: "Erro ao obter filmes"});
    }
}