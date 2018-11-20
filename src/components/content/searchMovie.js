import React from 'react';
import { Search, Header } from 'semantic-ui-react';
import './content.css'

export default class SearchMovie extends React.Component {
  render() {
    return (
      <>

        <Search
          

          placeholder="search movie or tv show" 
        />

        
        
        <Header as="h2" textAlign="center">Search results: </Header>
      </>
    )
  }
}