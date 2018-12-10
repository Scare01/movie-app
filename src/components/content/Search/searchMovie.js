import React from 'react';
import { Input, Header, Button } from 'semantic-ui-react';


import GetSearchMovie from './getSearchMovie';
import '../movies_tvs.css';


export default class SearchMovie extends React.Component {

  

  state = {
    search_request: '',
    searchMovie: '',  
  }




    
  setSearchRequest = (e) => {
    this.setState({
      search_request: e.target.value,
      searchMovie: '',
    });
    e.preventDefault();
  }

  searchMovie = () => {
    this.setState({
      searchMovie: this.state.search_request,
      search_request: '',
      
    });
  }



  
  render() {
    
    
    
    return (
      <div id='search_panel'>
        
        <Input
          onChange={this.setSearchRequest}
          placeholder="search movie or tv show" 
          value={this.state.search_request}
        />
        <Button onClick={this.searchMovie} id='button_search'>Search</Button>

        <Header as="h2" textAlign="center">Search results: </Header>
        
        {this.state.searchMovie ?
          <GetSearchMovie 
            movie={this.state.searchMovie}
            main_url={this.state.main_url}
          /> :
          null

        }   
         

      
        
      </div>
    )
  }
}