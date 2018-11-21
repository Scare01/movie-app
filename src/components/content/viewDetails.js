import React from 'react';
import { Header } from 'semantic-ui-react';

export default class ViewDetails extends React.Component {

  render() {

    console.log(typeof window.location.href)
    
    return (
      <>
      <Header as='h2' textAlign="center">Details</Header>
      <h2>{window.location.href}</h2>
      </>
    )
  }
}