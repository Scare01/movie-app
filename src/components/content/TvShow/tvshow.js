import React from 'react';
import { Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



export default class TvShow extends React.Component {

  render(){
    const img_url = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
    
    const link_url = '/TvShowDetail/'
    
    const link_detail = window.location.href.includes('TvShowDetail') ?
                        null :
                        <Link to={link_url + this.props.tvshow.id}>
                          Details
                        </Link>;
                        
    const genres = window.location.href.includes('TvShowDetail') ?
                    <>
                    {this.props.tvshow.genres.map(genre => 
                      <span key={genre.id}>{genre.name} </span>
                    )}
                    </> :
                    null;
       return(
      <Item>
        <Item.Image src={img_url+this.props.tvshow.poster_path} />

        <Item.Content>
          <Item.Header><b>{this.props.tvshow.name}</b></Item.Header>
          
          <Item.Meta>
            {genres}
          </Item.Meta>
       
          <Item.Description>{this.props.tvshow.overview}</Item.Description>
          {link_detail}
        </Item.Content>
      </Item>
    )
  }
}