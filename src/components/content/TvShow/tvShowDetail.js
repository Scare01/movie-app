import React from 'react';
import { Header } from 'semantic-ui-react';
//import './details.css';

import TvShow from './tvshow';
import GetCreditsTvShow from '../People/getCreditsTvShow';
import GetRecomTvShow from './getRecomTv';

export default class MovieDetail extends React.Component {

  render() {

    

    return (
      <>
        <TvShow 
          tvshow={this.props.tvshow}
        />
                
        <Header as='h3'>Credits:</Header>
        <GetCreditsTvShow 
          movie={this.props.tvshow}
        />
        <Header as='h3'>Recommendations:</Header>
        <GetRecomTvShow
          tvshow={this.props.tvshow} 
        />

      </>
    )
  }
}