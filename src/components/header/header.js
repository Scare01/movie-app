import React from 'react';
import { Header, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './header.css';

export default class HeaderApp extends React.Component {
  render() {
    return (
      <Header block>
        <Link to="/" id="header">Movie App</Link>
        <Link to="/searchMovie" className="links">Search</Link>
        <Link to="/popularTvShows" className="links">TV Shows</Link>
        <Link to="/popularMovies" className="links">Movies</Link>
      </Header>
    )
  }
}