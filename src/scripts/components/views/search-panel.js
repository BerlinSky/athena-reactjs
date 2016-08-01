import React from 'react';

export default class SearchPanel extends React.Component {
  constructor() {
    super();

    this.state = {
      comments: [],
      searchValue: 'Search ...'
    };

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="formContainer">

        <form className="searchBar">
          <input className="searchBar__inputText" 
            value={this.state.searchValue}
            onChange={this._handleSubmit}
          />
          <input className="searchBar__button" type="submit" />
        </form>

      </div>
    )
  }

  _handleSubmit(e) {
    e.preventDefault();

    this.setState({
      searchValue: event.target.value.substr(0, 25)
    })
  }
}
