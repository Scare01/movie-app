import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';


import {BrowserRouter, Route } from 'react-router-dom';

import MainContent from './components/content/mainContent'
import PopularMovies from './components/content/popularMovies';
import PopularTvShows from './components/content/popularTvShows';
import SearchMovie from './components/content/searchMovie';
import Favorites from './components/content/favorites';

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
          <Route path='/popularTvShows' component={PopularTvShows} />
          <Route path='/searchMovie' component={SearchMovie} />
          <Route path='/favorites' component={Favorites} />
        </div>
        

        
      </>

    </BrowserRouter>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

