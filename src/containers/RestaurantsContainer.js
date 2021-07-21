import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants reviews={this.props.reviews} deleteRestaurant={this.props.deleteRestaurant} restaurants={this.props.restaurants}/>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
  reviews: state.reviews
})

const mapDispatchToProps = dispatch => ({
  addRestaurant: name => dispatch({ type: "ADD_RESTAURANT", text: name }),
  deleteRestaurant: id => dispatch({type: "DELETE_RESTAURANT", id: id})
})



export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
