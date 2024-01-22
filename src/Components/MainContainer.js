import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackGround from './VideoBackGround';
import { VideoTitle } from './VideoTitle';

export const MainContainer = () => {
    const movies = useSelector(store=> store.movies?.nowPlayingMovies);
    if(movies === null) return ;
    const mainMovie = movies[0];
    const{original_title,overview,id} = mainMovie;
    return (
      <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id} />
    </div>
  )
}
