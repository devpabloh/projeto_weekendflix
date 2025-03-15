import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const getPopularMovies = async ()=>{
    const response = await axios.get("https://api.themoviedb.org/3/movie/popular", {
        params: {
            api_key: process.env.TMDB_API_KEY,
            language: "pt-BR",
            page: 1
        }
    });
    return response.data;
};