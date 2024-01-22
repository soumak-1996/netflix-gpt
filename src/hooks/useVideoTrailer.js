import { API_Options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice'
import { useEffect } from 'react'

const useVideoTrailer = (movieId) =>{
const dispatch = useDispatch();
  useEffect(()=>{
    getTrailer();
  },[]);
  const getTrailer = async() =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_Options)
    const json = await data.json();
    const trailer = json.results.filter(video => video.type ==="Trailer");
    if(!trailer) return;
    const finalTrailer = trailer.length ?trailer[0]:json.results[0];
    dispatch(addTrailerVideo(finalTrailer));
  }
}
export default useVideoTrailer;