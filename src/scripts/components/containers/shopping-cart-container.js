import React from 'react';

import CartStepsPanel from '../views/shopping-cart/cart-steps';

export default class ShoppingCartContainer extends React.Component {
  render() {
    return (
      <section className="l-mainContent mainContent">

        <div className="l-panelContainer panelContainer">
          <div className="l-panel formContainer formContainer--smallSpaceOnRight formContainer--noButtomBorder">
            <div className="stepTitle">1 &nbsp;&nbsp; Review Cart</div>

            <div className="formContainer">
              <div className="tableRow tableHeader">
               <div className="tableRow__column--default tableRow__headerText">Item</div>
               <div className="tableRow__column--6x tableRow__headerText"></div>
               <div className="tableRow__column--2x tableRow__headerText">Size</div>
               <div className="tableRow__num--xx tableRow__column--default tableRow__headerText">Amount</div>
              </div>

              <div className="tableRow">
               <div className="tableRow__column--default tableRow__image">
                 <div className="cartItemImage">
                   <img src="./images/middle-march.jpg" />
                 </div>
               </div>
               <div className="tableRow__column--6x tableRow__bodyText">Summer 2013 Metropolitan Book Tour (NYC2013)</div>
               <div className="tableRow__column--2x tableRow__bodyText"></div>
               <div className="tableRow__num tableRow__bodyNum"></div>
              </div>

               <div className="tableRow">
                <div className="tableRow__column--default tableRow__image--component">
                  <div className="cartItemImage">
                    <img src="./images/the-grapes-of-wrath.jpg" />
                  </div>
                </div>
                <div className="tableRow__column--6x tableRow__bodyText">Winter 2016 West Coast Book Tour (LAC2016)</div>
                <div className=" tableRow__column--2x tableRow__bodyText">
                  <select className="js-selectItemSize">
                    <option value="0">XXS</option>
                    <option value="1">XS</option>
                    <option value="2">S</option>
                    <option value="3">M</option>
                    <option value="4">L</option>
                    <option value="5">XL</option>
                    <option value="6">XXL</option>
                  </select>
                </div>
                <div className="tableRow__num tableRow__bodyNum">US$ 89.95</div>
               </div>

                <div className="tableRow">
                <div className="tableRow__column--default tableRow__image--component">
                  <div className="cartItemImage">
                    <img src="./images/the-grapes-of-wrath.jpg" />
                  </div>
                </div>
                <div className="tableRow__column--6x tableRow__bodyText">Winter 2016 West Coast Book Tour (LAC2016)</div>
                <div className=" tableRow__column--2x tableRow__bodyText">
                  <select className="js-selectItemSize">
                    <option value="0">XXS</option>
                    <option value="1">XS</option>
                    <option value="2">S</option>
                    <option value="3">M</option>
                    <option value="4">L</option>
                    <option value="5">XL</option>
                    <option value="6">XXL</option>
                  </select>
                </div>
                <div className="tableRow__num tableRow__bodyNum">US$ 89.95</div>
               </div>

              <div className="tableRow">
                <div className="tableRow__column--default tableRow__image--component">
                  <div className="cartItemImage">
                    <img src="./images/the-grapes-of-wrath.jpg" />
                  </div>
                </div>
                <div className="tableRow__column--6x tableRow__bodyText">Winter 2016 West Coast Book Tour (LAC2016)</div>
                <div className=" tableRow__column--2x tableRow__bodyText">
                  <select className="js-selectItemSize">
                    <option value="0">XXS</option>
                    <option value="1">XS</option>
                    <option value="2">S</option>
                    <option value="3">M</option>
                    <option value="4">L</option>
                    <option value="5">XL</option>
                    <option value="6">XXL</option>
                  </select>
                </div>
                <div className="tableRow__num tableRow__bodyNum">US$ 89.95</div>
              </div>

              <div className="tableRow">
                <div className="tableRow__column--default tableRow__image--component">
             
                </div>
                <div className="tableRow__column--6x tableRow__bodyText">
                </div>
                <div className=" tableRow__column--2x tableRow__bodyText">
                  Total
                </div>
                <div className="tableRow__num tableRow__bodyNum">US$ 89.95</div>
              </div>

              <div className="tableRow">
                <div className="tableRow__column--6x">
                  <form className="dataForm">
                    <div className="inputGroup">
                      <input className="dataInput" type="text" />
                      <label>Coupon Code</label>
                    </div>
                  </form>
                </div>
                <div className="tableRow__column--2x tableRow__bodyText">
                  <div className="dataForm__buttonPanel">
                    <a className="actionButton">apply</a>
                  </div>
                </div>
                <div className=" tableRow__column--2x tableRow__bodyText">
                </div>
                <div className="tableRow__num tableRow__bodyNum">
                </div>
              </div>

              <div className="dataForm__buttonPanel">
                <a className="actionButton" href="2-review-address.html">next</a>
              </div> 
            </div>

            <div className="stepTitle">2 &nbsp;&nbsp; Review Address(es)</div>
            <div className="stepTitle">3 &nbsp;&nbsp; Billing Address</div>
            <div className="stepTitle">4 &nbsp;&nbsp; Shipping Address</div>
            <div className="stepTitle">5 &nbsp;&nbsp; Payment Information</div>
            <div className="stepTitle">6 &nbsp;&nbsp; Review Order</div>
            <div className="stepTitle">7 &nbsp;&nbsp; Invoice</div>
          </div>

          <CartStepsPanel />
        </div>

      </section>
    )
  }
}

