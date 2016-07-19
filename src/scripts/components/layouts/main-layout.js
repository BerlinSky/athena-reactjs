import React from 'react';

import AppNavigation from '../navigation';
import AppFooter from '../footer';

export default class MainLayout extends React.Component {
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
