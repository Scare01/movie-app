import React from 'react';
import { Search, Input, Header } from 'semantic-ui-react';
import './content.css'

export default class SearchMovie extends React.Component {
  render() {
    return (
      <>

        <Search
          id="search"

          placeholder="search movie or tv show" 
        />

        
        <Header as="h2">Search results: </Header>
      </>
    )
  }
}