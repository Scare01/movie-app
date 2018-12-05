import React from 'react';
import { Fetch } from 'react-data-fetching';
import { Item } from 'semantic-ui-react';



export default class GetRecomMovie extends React.Component {


  onScroll(evt, list) { }

  render() {
    const url_part1 = 'https://api.themoviedb.org/3/movie/';
    const movieId = this.props.movie.id;
    const url_part2 = '/recommendations?api_key=';
    const api_key = '8f2490decc0a336ae87db98a12a29a59';
    const movieDetailUrl = '/MovieDetail/';
    const img_url = 'https://image.tmdb.org/t/p/w500_and_h282_face/';

    return (
      
      <Fetch
        url={url_part1+movieId+url_part2+api_key}
      >
        {({data}) => (

          <div id="panel">
            {data.results.map(movie => 
              <Item key={movie.id} >
                <a href={movieDetailUrl+movie.id}>
                  <Item.Image size='small' src={img_url+movie.poster_path} />
                </a>
                <Item.Meta id='recommend_title'>
                  {movie.title}
                </Item.Meta>
              </Item>
              )}
          </div>
          
        )}
      </Fetch>
    )
  }
}