import React from 'react';

export default class AuthorsContainer extends React.Component {

  render() {
    return (
      <section className="l-mainContent mainContent">
       <div className="slideContainer">
         <div className="slides">
           <div className="slideShowTitle">ENJOY THE SHOW</div>

           <input className="showOption" type="radio" id="slide-1" name="slide" aria-hidden="true" hidden="" checked="checked" />
           <div className="slide">
             <img src="./images/box-01.jpg" />
           </div>
           <input className="showOption" type="radio" id="slide-2" name="slide" aria-hidden="true" hidden="" />
           <div className="slide">
             <img src="./images/box-02.jpg" />
           </div>
           <input className="showOption" type="radio" id="slide-3" name="slide" aria-hidden="true" hidden="" />
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
               <label htmlFor="slide-1" className="slides__pointer">•</label>
             </li>
             <li>
               <label htmlFor="slide-2" className="slides__pointer">•</label>
             </li>
             <li>
               <label htmlFor="slide-3" className="slides__pointer">•</label>
             </li>
           </ol>
         </div>
       </div> 
      </section>
    )
  }
 }
