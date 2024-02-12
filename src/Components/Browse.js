import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import { MainContainer } from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  const showgpt = useSelector(store=> store.gpt.showGPTSearch);
  return (
    <div>
      <Header />
      {showgpt ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  )
}

export default Browse