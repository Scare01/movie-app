import React from 'react';
import { Header } from 'semantic-ui-react';
import './details.css';

import Movie from './movie';
import GetCredits from '../People/getCredits';

export default class MovieDetail extends React.Component {

  render() {

    

    return (
      <>
        <Movie 
          movie={this.props.movie}
        />
                
        <Header as='h3'>Credits:</Header>
        <GetCredits 
          movie={this.props.movie}
        />

      </>
    )
  }
}