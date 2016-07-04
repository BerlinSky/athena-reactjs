import React from 'react';

export default class BooklistForm extends React.Component {
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
        <form action="">
          <div className="actionForm">
            <div className="actionForm__section">
              <div className="actionForm__panel">
                <input type="text" placeholder="Title" ref={ c => this._title = c } />
              </div>
              <div className="actionForm__panel">
                <input type="text" placeholder="Author" ref={ v => this._author = v } />
              </div>
              <div className="actionForm__panel">
                <input type="text" placeholder="Image Link" ref={ v => this._imageUrl = v }/>
              </div>
             
            </div>
            <div className="actionForm__section">
              <div className="actionForm__panel">
                <textarea cols="10" rows="5" placeholder="Description" ref={ v => this._description = v }>
                </textarea>
              </div>
            </div>
          </div>

          <div className="buttonPanel">
            <a className="actionButton" onClick={ this._handleSubmit }>add book</a>
          </div>
        </form>
      </div>
    )
  }

  _handleSubmit(e) {
    e.preventDefault();

    this.props.addBook(this._title.value, this._author.value, this._description.value, this._imageUrl.value);

    this._title.value = '';
    this._author.value = '';
    this._imageUrl.value = '';
    this._description.value = '';
  }

}
