import React from 'react';
import { Item, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../movies_tvs.css';




export default class Movie extends React.Component {

  state = {
    icon: Object.keys(localStorage).includes(JSON.stringify(this.props.movie.id)+'_movie') ?
          true : false
  }

  
  clickFavoriteButton = () => {
    if (this.state.icon) {
      let key = JSON.stringify(this.props.movie.id)+'_movie';
      this.setState({ icon : !this.state.icon });
      window.localStorage.removeItem(key);
      
    }else {
      this.setState({ icon : !this.state.icon });
      window.localStorage.setItem(JSON.stringify(this.props.movie.id)+'_movie', JSON.stringify(this.props.movie));
      
    }
  }




  

  render(){

    
    


    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
                    'Sep', 'Oct', 'Nov', 'Dec']
    let img_url = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
    
    let month_num = this.props.movie.release_date ? 
                      (this.props.movie.release_date.split('-').splice(1,1))
                      : null;
    
    let releaseDate = this.props.movie.release_date ? 
                        <i>
                        {this.props.movie.release_date.split('-')[2]}
                        <span> </span>
                        {months[parseInt(month_num)-1]}
                        <span> </span>
                        {this.props.movie.release_date.split('-')[0]}
                        </i>
                        : null;
    let link_url = '/MovieDetail/'
    
    let link_detail = window.location.href.includes('MovieDetail') ?
                        null :
                        <Link to={link_url + this.props.movie.id} className='ui icon left labeled button'>
                          <Icon name="list ul" />
                          Details
                        </Link>;
                        
    let genres = window.location.href.includes('MovieDetail') ?
                    <>
                    {this.props.movie.genres.map(genre => 
                      <span key={genre.id}>{genre.name} </span>
                    )}
                    </> :
                    null;

    
    
       return(
      <Item className='cardMovieOrTv'>
        <Item.Image src={img_url+this.props.movie.poster_path} />

        <Item.Content id='movie_details'>
          
          <Item.Header id={
                            window.location.href.includes('Detail') ?
                            'header_detail' :
                            'header'
                            }
          >
            {this.props.movie.title}
          </Item.Header>
          <Item.Meta>
            {releaseDate}
          </Item.Meta>
          <Item.Meta id='genres'>
            {genres}
          </Item.Meta>
          <hr className={ window.location.href.includes("Detail") ? 
                          'hr_details' :
                          null
                        } />
          
          <Item.Description id= {window.location.href.includes('Detail') ? 
                                'details_description' :
                                'description'  
                              }>
            {
              window.location.href.includes('Detail') ?
              this.props.movie.overview :
              this.props.movie.overview.slice(0,170)+"..."
             }
          </Item.Description>
          <hr className={ window.location.href.includes("Detail") ? 
                          'hr_details' :
                          null
                        } />
          
          <div id='button_group'>
          {link_detail}
            <Button icon onClick={this.clickFavoriteButton} labelPosition='right'>
              Favorites
              <Icon name={this.state.icon ? 'heart' : 'heart outline'} /> 
            </Button> 
          
          </div>
                
        </Item.Content>
      </Item>
    )
  }
}