import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
       <div className="l-siteContainer l-header-fixed l-footer-fixed siteContainer">

        <navigation className="l-navigation navigation">
          <h1 className="logo"><a href="#">Athena</a></h1>
          <nav className="l-navlinks navlinks">
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

        {this.props.children}
        
        <section className="searchContainer js-searchContainer">
          <form className="searchForm">
            <input className="searchForm__input" type="search" placeholder="Search..."/>
            <button className="searchForm__submit js-buttonSearchSubmit" type="submit">Search</button>
          </form>
          <div className="searchContent">

          </div>
          <span className="searchClose js-buttonSearchClose"></span>
        </section>

        <footer className="l-footer footer">
          <div className="copyright">&copy; Inspired by Athena</div>
        </footer>

      </div>
    )
  }
}
