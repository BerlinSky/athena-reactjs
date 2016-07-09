import React from 'react';

export default class ClubsLanding extends React.Component {
  render() {
    return (
      <section className="l-mainContent mainContent">
        <div className="siteAttraction">
          <div className="siteCover">
            <h1 className="siteCover__caption">`Clubs' Landing Page`</h1>
          </div>
          <video className="siteShow" src="./movies/In-And-Out.mp4" autoPlay loop></video> 
        </div>
      </section>
    )
  }
}
