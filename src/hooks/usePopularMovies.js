import { useDispatch } from "react-redux"
import { addNowPlayingMovies, addPopularMovies } from "../utils/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"

const usePopularMovies = () => {
    const dispatch = useDispatch()
    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS)
        const json = await data.json()
        dispatch(addPopularMovies(json.results))
    }

    useEffect(()=>{

        getPopularMovies()
    },[])
}

export default usePopularMovies;