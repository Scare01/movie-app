import React from 'react';
import { Fetch } from 'react-data-fetching';


import TvShowDetail from './tvShowDetail';

export default class GetDetails extends React.Component {

  render() {
   
     
    return(
      <>
        <Fetch
          url={this.props.main_url + this.props.tvshowId + this.props.api_key}
        >
         {({data}) => (
           
            <TvShowDetail
              key={data.id} 
              tvshow={data}
            />
         )}

        </Fetch>
      </>
    )
  }
}