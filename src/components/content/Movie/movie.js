import React from 'react';
import { Item, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



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

    console.log(Object.keys(localStorage));
    


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
    const link_url = '/MovieDetail/'
    
    const link_detail = window.location.href.includes('MovieDetail') ?
                        null :
                        <Link to={link_url + this.props.movie.id}>
                          Details
                        </Link>;
                        
    const genres = window.location.href.includes('MovieDetail') ?
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
       
          <Item.Description>
            {
              window.location.href.includes('Detail') ?
              this.props.movie.overview :
              this.props.movie.overview.slice(0,250)+"..."
             }
          </Item.Description>
          {link_detail}
            <Button icon onClick={this.clickFavoriteButton}>
              <Icon name={this.state.icon ? 'heart' : 'heart outline'} /> 
            </Button> 
                
        </Item.Content>
      </Item>
    )
  }
}