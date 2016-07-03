import React from 'react';
import $ from 'jquery';

export default class BooklistContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      comments: []
    };
  }

  componentWillMount() {
    this._fetchComments();
  }

  render() {
    return (
      <div className="panelContainer">
        <div className="media">
        <img className="media__figure image" src="./images/the-grapes-of-wrath.jpg" alt="image" />
         <div className="media__body">
           <h3 className="media__title">The Grapes of Wrath</h3>
           <div className="media__subtitle">by John Steinbeck</div>
           <p className="media__description">
            An epic of the Great Depression chronicles the Dust Bowl migration of the 1930s and tells the story of one Oklahoma farm family, the Joads.
           </p>
          </div>
        </div>
      </div>
    )
  }

  _fetchComments() {
    $.ajax({
      method: 'GET',
      url: this.props.apiUrl,
      success: (comments) => {
        this.setState({ comments })

      console.info('comments', comments.length);

      }
    });
  }
}
