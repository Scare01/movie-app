import React from 'react';
import { Input, Header, Button } from 'semantic-ui-react';
import '../content.css'

import GetSearchMovie from './getSearchMovie';



export default class SearchMovie extends React.Component {

  

  state = {
    search_request: null,
    colorMovie: 'blue',
    colorTvShow: 'blue',
    main_url: null,
    searchMovie: null,  
  }

    
  setSearchRequest = (e) => {
    this.setState({
      search_request: e.target.value
    });
    e.preventDefault();
  }

  searchMovie = () => {
    this.setState({
      searchMovie: this.state.search_request
    });
  }


  clickMovie = () => {
    this.setState({
      colorMovie: 'facebook',
      colorTvShow: 'blue',
      main_url: 'https://api.themoviedb.org/3/search/movie?api_key=',
    });
  }

  clickTvshow = () => {
    this.setState({
      colorTvShow: 'facebook',
      colorMovie: 'blue',
      main_url: 'https://api.themoviedb.org/3/search/tv?api_key='
    })
  }

  
  render() {
    
     
    
    return (
      <>
        <b>Befor search choose movie or tvshow: </b>

        <Button.Group>
          <Button 
            onClick={this.clickMovie} 
            color={this.state.colorMovie}
          >
            Movie
          </Button>
          <Button 
            onClick={this.clickTvshow} 
            color={this.state.colorTvShow}
          >
            TvShow
          </Button> 
        </Button.Group>

        

        <Input
          onChange={this.setSearchRequest}
          placeholder="search movie or tv show" 
        />
        <Button onClick={this.searchMovie}>Search</Button>

        <Header as="h2" textAlign="center">Search results: </Header>
        
        {this.state.search_request ? 
          <GetSearchMovie 
            movie={this.state.searchMovie}
            main_url={this.state.main_url}
          /> :
          null
        }

      
        
      </>
    )
  }
}