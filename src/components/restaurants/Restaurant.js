import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {


  render() {

    return (
      <div>
        <li>
        <h1>{this.props.restaurant.text}</h1>
          
          <button onClick={() => {this.props.deleteRestaurant(this.props.restaurant.id)}}> X </button>
          <ReviewsContainer restaurantId={this.props.restaurant.id} reviews={this.props.reviews}/>
      </li>
      </div>
    );
  }
};

export default Restaurant;
