import React from 'react';
import { Item, Image } from 'semantic-ui-react';
import { Fetch } from 'react-data-fetching';



export default class GetSearchMovie extends React.Component {
  render() {
    const main_url = this.props.main_url;
    const api_key = '8f2490decc0a336ae87db98a12a29a59'
    const request = this.props.movie;
    const img_url = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';

    return (
      <Item.Group>
        <Fetch url={main_url+api_key+'&query='+request}>
          {({data}) => (
            data.results.map(movie =>
                <Image src={img_url+movie.poster_path} />
              )
            )}
        </Fetch>
      </Item.Group>
    )
  }
}