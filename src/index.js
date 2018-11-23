import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';


import {BrowserRouter, Route } from 'react-router-dom';

import MainContent from './components/content/mainContent'
import PopularMovies from './components/content/Movie/popularMovies';
import PopularTvShows from './components/content/TvShow/popularTvShows';
import SearchMovie from './components/content/searchMovie';
import Favorites from './components/content/favorites';
import ViewDetailsPopularMovies from './components/content/Movie/viewDetailsPopularMovies';
import ViewDetailsPopularTvShows from './components/content/TvShow/viewDetailsPopularTvShows'

import HeaderApp from './components/header/header';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <>
        <HeaderApp />
        <div id="content">
          <Route path='/' exact component={MainContent} />
          
          <Route path='/popularMovies' component={PopularMovies} />
          <Route path='/Movie/viewDetails/:movieId' component={ViewDetailsPopularMovies} />

          <Route path='/popularTvShows' component={PopularTvShows} />
          <Route path='/TvShow/viewDetails/:movieId' component={ViewDetailsPopularTvShows} />

          <Route path='/searchMovie' component={SearchMovie} />
          <Route path='/favorites' component={Favorites} />
          
          
        </div>
        
        
        
      </>

    </BrowserRouter>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

