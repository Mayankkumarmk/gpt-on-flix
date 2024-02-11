import { useDispatch } from "react-redux"
import { addNowPlayingMovies, addUpcomingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"

const useUpcomingMovies = () => {
    const dispatch = useDispatch()
    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming ', API_OPTIONS)
        const json = await data.json()
        dispatch(addUpcomingMovies(json.results))
    }

    useEffect(()=>{

        getUpcomingMovies()
    },[])
}

export default useUpcomingMovies;