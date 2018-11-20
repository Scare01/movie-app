import React from 'react';
import { Item, Button } from 'semantic-ui-react';
import './content.css';

export default class Movie extends React.Component {
  

  clickDetails = () => {
    console.log(this.props.movie.id);
  }
    
  render(){
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
                    'Sep', 'Oct', 'Nov', 'Dec']
    const img_url = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
    const month_num = (this.props.movie.release_date.split('-').splice(1,1));
 

    return(
      <Item>
        <Item.Image src={img_url+this.props.movie.poster_path} />

        <Item.Content>
          <Item.Header><b>{this.props.movie.title}</b></Item.Header>
          <Item.Meta>
            <i>
            {this.props.movie.release_date.split('-')[2]}
            <span> </span>
            {months[parseInt(month_num)-1]}
            <span> </span>
            {this.props.movie.release_date.split('-')[0]}
            </i>
          </Item.Meta>
        
        
          <Item.Description>{this.props.movie.overview}</Item.Description>
        
        
        <Button onClick={this.clickDetails}>
              Details
            </Button>
        </Item.Content>
        
      </Item>
    )
  }
}