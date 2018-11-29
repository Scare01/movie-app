import React from 'react';
import { Fetch } from 'react-data-fetching';
import { Item } from 'semantic-ui-react';



export default class GetRecomTvShow extends React.Component {




  render() {
    const url_part1 = 'https://api.themoviedb.org/3/tv/';
    const tvshowId = this.props.tvshow.id;
    const url_part2 = '/recommendations?api_key=';
    const api_key = '8f2490decc0a336ae87db98a12a29a59';
    const tvshowDetailUrl = '/tvshowDetail/';
    const img_url = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';

    

    return (
      <Fetch
        url={url_part1+tvshowId+url_part2+api_key}
      >
        {({data}) => (
          <div id="panel">
          
          {data.results.map(tvshow => 
            <Item key={tvshow.id}>
              <a href={tvshowDetailUrl+tvshow.id}>
                <Item.Image size='small' src={img_url+tvshow.poster_path} />
              </a>
              <Item.Meta>
                {tvshow.title}
              </Item.Meta>
            </Item>
          )}
          
          </div>
        )}
        
      </Fetch>
    )
  }
}