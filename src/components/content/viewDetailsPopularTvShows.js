import React from 'react';


import GetDetails from './getDetails';

export default class ViewDetailsPopularMovies extends React.Component {

  render() {
    const current_page = window.location.href;
    const current_page_array = current_page.split('/');
    const movieId = current_page_array[current_page_array.length -1];
    const main_url = "https://api.themoviedb.org/3/tv/";
    const api_key = "?api_key=8f2490decc0a336ae87db98a12a29a59";
    
     return (
      <>
      <GetDetails 
        movieId={movieId}
        main_url={main_url}
        api_key={api_key}
      />
      
      </>
    )
  }
}