import React from 'react';
import { Link } from 'react-router';

import AppNavigation from '../components/navigation';
import AppFooter from '../components/footer';

export default class Layout extends React.Component {
  render() {
    return (
       <div className="l-siteContainer l-header-fixed l-footer-fixed siteContainer">

        <AppNavigation />

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

        <AppFooter />

      </div>
    )
  }
}
