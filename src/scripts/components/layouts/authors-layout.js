import React from 'react';

export default class AuthorsLayout extends React.Component {
  render() {
    return (
      <div className="l-siteContainer l-header-fixed l-footer-fixed siteContainer">

        {this.props.children}

      </div>
    )
  }
}
