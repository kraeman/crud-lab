import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {
    switch (action.type) {
      case 'ADD_RESTAURANT':
        // console.log(restaurantId)
        return {restaurants: [...state.restaurants, {text: action.text, id: cuid()}], reviews: [...state.reviews]}
  
      case 'DELETE_RESTAURANT':
        return {restaurants: [...state.restaurants.filter(restaurant => restaurant.id !== action.id)], reviews: [...state.reviews.filter(review => review.restaurantId !== action.id)]};

      case 'ADD_REVIEW':
        return {restaurants: [...state.restaurants], reviews: [...state.reviews, {id: cuid(), restaurantId: action.review.restaurantId, text: action.review.text}]}

      case 'DELETE_REVIEW':
        return {restaurants: [...state.restaurants], reviews: [...state.reviews.filter(review => review.id !== action.review.id)]};
      default:
        return state;
    }
  };
