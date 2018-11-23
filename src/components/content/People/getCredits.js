import React from 'react';
import { Fetch } from 'react-data-fetching';

import Credit from './credit';
import './credit.css';


export default class GetCreadits extends React.Component {
  render() {
    const url_credits_1 = "https://api.themoviedb.org/3/movie/"
    const url_credits_2 = "/credits?api_key="
    const api_key = '8f2490decc0a336ae87db98a12a29a59';

    return (
      
      <Fetch
        url={url_credits_1 + this.props.movie.id + url_credits_2 + api_key}
      >

        {({data}) => (
          <div id="credits">

          {data.cast.slice(0, 7).map(cast => 
              
                <Credit
                  key={cast.id} 
                  cast={cast}
                />
              
            )}

          </div>
        )}


      </Fetch>


    )
  }
}