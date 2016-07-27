import React from 'react';

export default class AuthorsContainer extends React.Component {

  constructor() {
    super();

    this.state = {
      radioItemList: []
    };

    this.radioItemList = [
      {id: "slide-1", checked: true, imageUrl: "./images/box-01.jpg"},
      {id: "slide-2", checked: false, imageUrl: "./images/box-02.jpg"},
      {id: "slide-3", checked: false, imageUrl: "./images/box-03.jpg"}
    ];
  }

  render() {
    const radioButtonList = this._getRadioItemList();

    return (
      <section className="l-mainContent mainContent">

       <div className="slideContainer">
         <div className="slides">
           <div className="slideShowTitle">ENJOY THE SHOW</div>

           { radioButtonList }

           <label htmlFor="slide-3" className="slides__navigator slides__navigator--prev nav-1">‹</label>
           <label htmlFor="slide-2" className="slides__navigator slides__navigator--next nav-1">›</label>
           <label htmlFor="slide-1" className="slides__navigator slides__navigator--prev nav-2">‹</label>
           <label htmlFor="slide-3" className="slides__navigator slides__navigator--next nav-2">›</label>
           <label htmlFor="slide-2" className="slides__navigator slides__navigator--prev nav-3">‹</label>
           <label htmlFor="slide-1" className="slides__navigator slides__navigator--next nav-3">›</label>

           <ol className="slides__indicators">
             <li>
               <label htmlFor="slide-1" className="slides__pointer" onClick={this._handleSlidePointerClick.bind(this, "slide-1")}>•</label>
             </li>
             <li>
               <label htmlFor="slide-2" className="slides__pointer" onClick={this._handleSlidePointerClick.bind(this, "slide-2")}>•</label>
             </li>
             <li>
               <label htmlFor="slide-3" className="slides__pointer" onClick={this._handleSlidePointerClick.bind(this, "slide-3")}>•</label>
             </li>
           </ol>
         </div>
       </div> 

      </section>
    )
  }

  _getRadioItemList() {
    return this.radioItemList.map((item) => {
      return (
        <div key={item.id}>
          <input className="showOption" type="radio" 
          id={item.id} 
          hidden="true"
          name="slide" 
          readOnly="true"
          checked={item.checked} />
          <div className="slide">
             <img src={ item.imageUrl } />
          </div>
        </div>
      );
    });
  }

  _handleSlidePointerClick(slideId) {
    console.clear();

    const items = this.radioItemList.map((item) => {
      (item.id === slideId) ?  (item.checked = true) : (item.checked = false);
    })

    this.setState({
      radioItemList: items
    });
  }

 }
