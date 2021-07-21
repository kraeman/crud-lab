import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId}/>
        <Reviews deleteReview={this.props.deleteReview} reviews={this.props.reviews} restaurantId={this.props.restaurantId}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
  reviews: state.reviews
})

const mapDispatchToProps = dispatch => ({
  addReview: (content, rid) => dispatch({ type: "ADD_REVIEW", review: {text: content, restaurantId: rid} }),
  deleteReview: (id, rid) => dispatch({type: "DELETE_REVIEW", review: {id: id, restaurantId: rid}})
})



export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
