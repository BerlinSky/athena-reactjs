import React from 'react';

export default class CartStepsPanel extends React.Component {
	render() {
	  return (
	  	<div className="l-panel cartStepsContainer">
	  	  <div className="cartSteps">
	  	    <div className="cartSteps__title">Your Checkout Process</div>
	  	    <ul className="cartSteps__list">
	  	      <li>Review Cart</li>
	  	      <li>Review Address(es)</li>
	  	      <li>Billing Address</li>
	  	      <li>Shipping Address</li>
	  	      <li>Review Order</li>
	  	      <li>Payment Information</li>
	  	      <li>Invoice</li>
	  	    </ul>
	  	  </div>
	  	</div>
  	)
	}
}