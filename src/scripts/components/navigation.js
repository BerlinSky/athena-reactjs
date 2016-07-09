import React from 'react';
import { Link } from 'react-router';

export default class AppNavigation extends React.Component {
  render() {
    return (
      <navigation className="l-navigation navigation">
        <h1 className="logo"><a href="#">Athena</a></h1>
        <nav className="l-navlinks navlinks">
          <ul>
            <li className="navlinks__item"><Link to="/books">Books</Link></li>
            <li className="navlinks__item"><Link to="/authors">Authors</Link></li>
            <li className="navlinks__item"><Link to="/clubs">Clubs</Link></li>
          </ul>
        </nav>
        <nav className="navActions">
          <ul>
            <li className="navActions__item navActions__item__search visble">
              <a className="js-buttonSearchOpen fa-search" href="#search">Search</a>
            </li>
            <li className="navActions__item menu">
              <a className="js-actionMenu fa-bars">Menu</a>
            </li>
          </ul>
        </nav>
      </navigation>
    )
  }
}



