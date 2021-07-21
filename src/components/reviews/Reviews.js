import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews.map(review => {
          return <li key={review.id}><Review restaurantId={this.props.restaurantId} review={review} deleteReview={this.props.deleteReview}/></li>
        })}
      </ul>
    );
  }
};

export default Reviews;