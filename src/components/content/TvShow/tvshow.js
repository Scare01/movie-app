import React from 'react';
import { Item, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



export default class TvShow extends React.Component {

  state = {
    icon: Object.keys(localStorage).includes(JSON.stringify(this.props.tvshow.id)+'_tvshow') ?
          true : false
  }

  
  clickFavoriteButton = () => {
    if (this.state.icon) {
      let key = JSON.stringify(this.props.tvshow.id)+'_tvshow';
      this.setState({ icon : !this.state.icon });
      window.localStorage.removeItem(key);
      
    }else {
      this.setState({ icon : !this.state.icon });
      window.localStorage.setItem(JSON.stringify(this.props.tvshow.id)+'_tvshow', JSON.stringify(this.props.tvshow));
      
    }
  }





  render(){
    const img_url = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
    
    const link_url = '/TvShowDetail/'
    
    const link_detail = window.location.href.includes('TvShowDetail') ?
                        null :
                        <Link to={link_url + this.props.tvshow.id} className='ui icon left labeled button'>
                          <Icon name="list ul" />
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

        <Item.Content  id='movie_details'>
          <Item.Header id='header'><b>{this.props.tvshow.name}</b></Item.Header>
          
          <Item.Meta>
            {genres}
          </Item.Meta>
          <hr className={ window.location.href.includes("Detail") ? 
                          'hr_details' :
                          null
                        }/>
          <Item.Description id='description'>
            {
              window.location.href.includes('Details') ?
              this.props.tvshow.overview :
              this.props.tvshow.overview.slice(0,250)+'...'
            }
          </Item.Description>
          <hr className={ window.location.href.includes("Detail") ? 
                          'hr_details' :
                          null
                        }/>
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