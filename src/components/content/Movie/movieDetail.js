import React from 'react';
import { Header } from 'semantic-ui-react';
import './details.css';

import Movie from './movie';
import GetCreditsMovie from '../People/getCreditsMovie';
import GetRecomMovie from './getRecomMovie';

export default class MovieDetail extends React.Component {

  render() {

    

    return (
      <div id='details'>
        <Movie 
          movie={this.props.movie}
        />
                
        <Header as='h3'>Credits:</Header>
        <GetCreditsMovie 
          movie={this.props.movie}
        />

        <Header as='h3'>Recommendtation:</Header>
        
        <GetRecomMovie 
          movie={this.props.movie}
        />

      </div>
    )
  }
}