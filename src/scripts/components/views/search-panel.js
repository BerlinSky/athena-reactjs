import React from 'react';

export default class SearchPanel extends React.Component {
  constructor() {
    super();

    // this.state = {
    //   comments: [],
    //   searchValue: 'Search ...'
    // };

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="formContainer">

        <form className="searchBar">
        {
          // <input className="searchBar__inputText" 
          //   value={this.state.searchValue}
          //   onChange={this._handleSubmit}
          // />
        }

          <input className="searchBar__inputText" type="text" placeholder="Search ..." 
            ref={ v => this._searchBar = v } 
            onChange={this._handleSubmit}
          />

          <input className="searchBar__button" type="submit" />
        </form>

      </div>
    )
  }

  _handleSubmit(e) {
    e.preventDefault();

    // const searchValue = event.target.value;

    // this.setState({
    //   searchValue: searchValue
    // })

    console.clear();

    this.props.onSearch(this._searchBar.value);
  }
}
