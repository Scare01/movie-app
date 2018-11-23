import React from 'react';
import { Card, Image } from 'semantic-ui-react';

import './credit.css';


export default class Credit extends React.Component {
  render() {
    const face_url = 'https://image.tmdb.org/t/p/w138_and_h175_face/';
    
    return (
      <Card>
        <Image size="small" src={face_url + this.props.cast.profile_path} />
        <Card.Content>
          <Card.Header>
            {this.props.cast.name}
          </Card.Header>
          <Card.Meta>
            {this.props.cast.character}
          </Card.Meta>
        </Card.Content>
      </Card>
      
    )
  }
}