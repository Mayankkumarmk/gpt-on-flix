import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMoviesSuggestion = () => {
    const {movieResults, movieNames} = useSelector(store => store.gpt)
    if(!movieNames) return null; 
    return (
        <div className="p-4 m-4 bg-opacity-90  text-white bg-black">
           {movieNames.map((movieName, index) => <MovieList title = {movieName} key = {movieName} movies = {movieResults[index]} /> )}
        </div>
    )
}

export default GptMoviesSuggestion;