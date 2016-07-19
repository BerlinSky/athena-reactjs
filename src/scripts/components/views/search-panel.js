import React from 'react';

export default class SearchPanel extends React.Component {
  constructor() {
    super();

    this.state = {
      comments: []
    };

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="formContainer">

        <form className="searchBar">
          <input className="searchBar__inputText" placeholder="Search for ..." />
          <input className="searchBar__button" type="submit" />
        </form>

      </div>
    )
  }

  _handleSubmit(e) {
    e.preventDefault();

  }
}
