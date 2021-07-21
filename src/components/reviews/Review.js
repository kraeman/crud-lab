import React, { Component } from 'react';

class Review extends Component {

  render() {
    

    return (
      <div>
        <div>
          {this.props.review.text}
        </div>
        <button onClick={() => this.props.deleteReview(this.props.review.id, this.props.restaurantId)}> X </button>
      </div>
    );
  }

};

export default Review;
