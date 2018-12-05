import React from 'react';
import { Item, Icon } from 'semantic-ui-react';
import { Fetch } from 'react-data-fetching';
import { Link } from 'react-router-dom';

import '../movies_tvs.css';


export default class GetSearchMovie extends React.Component {
  render() {
    // const main_url = this.props.main_url;
    const main_url = 'https://api.themoviedb.org/3/search/multi?api_key=';
    const api_key = '8f2490decc0a336ae87db98a12a29a59'
    const request = this.props.movie;
    const img_url = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';

    const movieDetailUrl = '/MovieDetail/';
    const tvShowDetailUrl = '/TvShowDetail/';

    if (request) {
      return (
        <Item.Group id='popular_movies'>
        <Fetch url={main_url+api_key+'&query='+request}>
          {({data}) => (
            data.results.map(movie =>
                 movie.poster_path ?

                  <Item key={movie.id}>
                    <Item.Image src={img_url+movie.poster_path} />
                    <Item.Content id='movie_details'>
                      <Item.Header id='header'>
                        {
                          movie.media_type === 'movie' ? 
                          movie.title :
                          movie.name
                        }
                      </Item.Header>
                      <Item.Meta>
                        {movie.media_type}
                      </Item.Meta>
                      <Item.Description id="description">
                        {
                         movie.overview ?
                         movie.overview.slice(0,250) + '...' :
                         null
                        }
                      </Item.Description>
                      <div id='button_group'>
                        <Link to={ movie.media_type === 'movie' ? 
                                movieDetailUrl+movie.id :
                                tvShowDetailUrl+movie.id
                              }
                              className='ui icon left labeled button' 
                        > 
                          <Icon name="list ul" />
                          Details
                        </Link> 
                      </div>
                      
                                       
                    </Item.Content>
                  </Item> :
                  null
                
                
                
                           
              )
            )}
        </Fetch>
      </Item.Group>
      )
    }

    return (
      <p></p>
    )
  }
}