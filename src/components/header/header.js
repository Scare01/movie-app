import React from 'react';
import { Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './header.css';

export default class HeaderApp extends React.Component {
  render() {
    return (
      <Header block>
        <NavLink to="/" id="header">Movie App</NavLink>
        <NavLink to="/searchMovie" className="links">Search</NavLink>
        <NavLink to="/favorites" className="links">Favorites</NavLink>
        <NavLink to="/popularTvShows" className="links">TV Shows</NavLink>
        <NavLink to="/popularMovies" className="links">Movies</NavLink>
      </Header>
    )
  }
}