import React from 'react';
import { Link } from 'react-router';

import AppNavigation from '../navigation';
import AppFooter from '../footer';

export default class BooksLayout extends React.Component {
  render() {
    return (
       <div className="l-siteContainer l-header-fixed l-footer-fixed siteContainer">

        <section className="l-mainContent mainContent">
          <div className="siteAttraction">
            <div className="siteCover">
              <h1 className="siteCover__caption">Bustling Daily Life in reading</h1>
            </div>
            <video className="siteShow" src="./movies/In-And-Out.mp4" autoPlay loop></video> 
          </div>

         {this.props.children}
         
        </section>

      </div>
    )
  }
}
