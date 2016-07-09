import React from 'react';
import { Link } from 'react-router';

import AppNavigation from '../navigation';
import AppFooter from '../footer';

export default class ClubsLayout extends React.Component {
  render() {
    return (
       <div className="l-siteContainer l-header-fixed l-footer-fixed siteContainer">

        {this.props.children}

      </div>
    )
  }
}
