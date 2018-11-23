import React from 'react';
import { Fetch } from 'react-data-fetching';


import MovieDetail from './movieDetail';

export default class GetDetails extends React.Component {

  render() {
    
    console.log("getDetails");
    console.log(this.props.movieId)

    return(
      <>
        <Fetch
          url={this.props.main_url + this.props.movieId + this.props.api_key}
        >
         {({data}) => (
           
            <MovieDetail
              key={data.id} 
              movie={data}
            />
         )}

        </Fetch>
      </>
    )
  }
}