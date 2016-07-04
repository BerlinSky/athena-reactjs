import React from 'react';

export default class BooklistForm extends React.Component {
  constructor() {
    super();

    this.state = {
      comments: []
    };
  }

  render() {
    return (
      <div className="formContainer">
          <form className="actionForm">
            <div className="actionForm__section">
              <div className="actionForm__panel">
                <input type="text" placeholder="Title" />
              </div>
              <div className="actionForm__panel">
                <input type="text" placeholder="Author" />
              </div>
              <div className="actionForm__panel">
                <input type="text" placeholder="Image Link" />
              </div>
             
            </div>
            <div className="actionForm__section">
              <div className="actionForm__panel">
                <textarea cols="10" rows="5" placeholder="Description"></textarea>
              </div>
            </div>
          </form>

          <div className="buttonPanel">
            <a className="actionButton">add book</a>
          </div>
      </div>
    )
  }

  _handleAddition(e) {
    e.preventDefault();

  }

}
