import React from 'react';
import { Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



export default class Movie extends React.Component {

  render(){
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
                    'Sep', 'Oct', 'Nov', 'Dec']
    const img_url = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
    
    const month_num = this.props.movie.release_date ? 
                      (this.props.movie.release_date.split('-').splice(1,1))
                      : null;
    
    const releaseDate = this.props.movie.release_date ? 
                        <i>
                        {this.props.movie.release_date.split('-')[2]}
                        <span> </span>
                        {months[parseInt(month_num)-1]}
                        <span> </span>
                        {this.props.movie.release_date.split('-')[0]}
                        </i>
                        : null;
    const link_url = "/popularMovies/viewDetails/";  
    
    const link_detail = window.location.href.includes('/popularMovies/viewDetails/') ?
                        null :
                        <Link to={link_url + this.props.movie.id}>
                          Details
                        </Link>;
                        
    const genres = window.location.href.includes('popularMovies/viewDetails' + this.props.movie.id) ?
                    <>
                    {this.props.movie.genres.map(genre => 
                      <span key={genre.id}>{genre.name} </span>
                    )}
                    </> :
                    null;
       return(
      <Item>
        <Item.Image src={img_url+this.props.movie.poster_path} />

        <Item.Content>
          <Item.Header><b>{this.props.movie.title}</b></Item.Header>
          <Item.Meta>
            {releaseDate}
          </Item.Meta>
          <Item.Meta>
            {genres}
          </Item.Meta>
       
          <Item.Description>{this.props.movie.overview}</Item.Description>
          {link_detail}
        </Item.Content>
      </Item>
    )
  }
}