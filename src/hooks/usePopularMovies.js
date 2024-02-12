import { API_Options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'

const usePopularMovies = () =>{
const dispatch = useDispatch();
  useEffect(()=>{
    getPopularMovies();
  },[]);
  const getPopularMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', API_Options)
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  }
}
export default usePopularMovies;