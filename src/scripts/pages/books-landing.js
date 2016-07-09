import React from 'react';

import BooklistContainer from '../components/booklist-container.js';

export default class BooksLanding extends React.Component {
  render() {
    return (
      <section className="l-mainContent mainContent">
        <div className="siteAttraction">
          <div className="siteCover">
            <h1 className="siteCover__caption">Bustling Daily Life in reading</h1>
          </div>
          <video className="siteShow" src="./movies/In-And-Out.mp4" autoPlay loop></video> 
        </div>

        <BooklistContainer apiUrl="data/booklist.json" />

      </section>
    )
  }
}
