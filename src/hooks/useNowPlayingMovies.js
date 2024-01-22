import { API_Options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'

const useNowPlayingMovies = () =>{
const dispatch = useDispatch();
  useEffect(()=>{
    getNowPlayingMovies();
  },[]);
  const getNowPlayingMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Options)
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }
}
export default useNowPlayingMovies;