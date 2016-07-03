import React from 'react';

export default class Landing extends React.Component {
  render() {
    return (
      <section className="l-mainContent mainContent">
        <div className="siteAttraction">
          <div className="siteCover">
           <h1 className="siteCover__caption">Bustling Daily Life in reading</h1>
          </div>
            <video className="siteShow" src="./movies/In-And-Out.mp4" autoPlay loop></video> 
          </div>
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
      </section>
    )
  }
}
