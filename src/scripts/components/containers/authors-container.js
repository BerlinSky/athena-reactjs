import React from 'react';

export default class AuthorsContainer extends React.Component {

  constructor() {
    super();

    this.state = {
      checked_1: true,
      checked_2: false,
      checked_3: false
    };
  }

  render() {
    const {name, value, checked, label} = this.props;

    return (
      <section className="l-mainContent mainContent">
       <div className="slideContainer">
         <div className="slides">
           <div className="slideShowTitle">ENJOY THE SHOW</div>

           <input className="showOption" type="radio" id="slide-1" name="slide" aria-hidden="true" 
            hidden="true" checked={this.state.checked_1} />
           <div className="slide">
             <img src="./images/box-01.jpg" />
           </div>
           <input className="showOption" type="radio" id="slide-2" name="slide" aria-hidden="true" 
            hidden="true" checked={this.state.checked_2} />
           <div className="slide">
             <img src="./images/box-02.jpg" />
           </div>
           <input className="showOption" type="radio" id="slide-3" name="slide" aria-hidden="true" 
            hidden="true" checked={this.state.checked_3} />
           <div className="slide">
             <img src="./images/box-03.jpg" />
           </div>

           <label htmlFor="slide-3" className="slides__navigator slides__navigator--prev nav-1">‹</label>
           <label htmlFor="slide-2" className="slides__navigator slides__navigator--next nav-1">›</label>
           <label htmlFor="slide-1" className="slides__navigator slides__navigator--prev nav-2">‹</label>
           <label htmlFor="slide-3" className="slides__navigator slides__navigator--next nav-2">›</label>
           <label htmlFor="slide-2" className="slides__navigator slides__navigator--prev nav-3">‹</label>
           <label htmlFor="slide-1" className="slides__navigator slides__navigator--next nav-3">›</label>

           <ol className="slides__indicators">
             <li>
               <label htmlFor="slide-1" className="slides__pointer" onClick={this._handleSlidePointerClick.bind(this, 1)}>•</label>
             </li>
             <li>
               <label htmlFor="slide-2" className="slides__pointer" onClick={this._handleSlidePointerClick.bind(this, 2)}>•</label>
             </li>
             <li>
               <label htmlFor="slide-3" className="slides__pointer" onClick={this._handleSlidePointerClick.bind(this, 3)}>•</label>
             </li>
           </ol>
         </div>
       </div> 
      </section>
    )
  }

  _handleSlidePointerClick(slideId) {
    console.clear();

    this.setState({
      checked_1: false,
      checked_2: false,
      checked_3: false
    });

    const key = "checked_" + slideId;

    this.setState({
      [key]: true
    });
  }

 }
