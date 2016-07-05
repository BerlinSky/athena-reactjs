import React from 'react';

export default class BooklistPanel extends React.Component {
  constructor() {
    super();

    this._handleRemove = this._handleRemove.bind(this);
  }

  render() {
    return (
     <div className="media">
       <img className="media__figure image" src={ this.props.imageUrl } alt="image" />
       <div className="media__body">
         <h3 className="media__title">{ this.props.title }</h3>
         <div className="media__subtitle">by { this.props.author }</div>
         <p className="media__description">
           { this.props.description }
         </p>
         <div className="buttonPanel">
          <a className="media__button" onClick={ this._handleRemove }>remove book</a>
         </div>
       </div>
     </div>
    )
  }

  _handleRemove(e) {
    e.preventDefault();
    this.props.onRemove(this.props.id);
  }

}
