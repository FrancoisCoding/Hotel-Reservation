import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";

const initialState = {
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  isLoading: false,
  type: "all",
  capacity: 1,
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  minSize: 0,
  maxSize: 0,
  breakfast: false,
  pets: false,
  bookDays: 0,
  isVisible: false,
};

// const maxPrice = Math.max(
//   ...initialState.rooms.map((item) => item.fields.price)
// );
// const maxSize = Math.max(...initialState.rooms.map((item) => item.fields.size));

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FILTER_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    case actionTypes.UPDATE_FILTER_CAPACITY:
      return {
        ...state,
        capacity: action.payload,
      };
    case actionTypes.UPDATE_FILTER_PRICE:
      return {
        ...state,
        price: action.payload,
      };
    case actionTypes.UPDATE_FILTER_MIN_PRICE:
      return {
        ...state,
        minPrice: action.payload,
      };
    case actionTypes.UPDATE_FILTER_MAX_PRICE:
      return {
        ...state,
        maxPrice: action.payload,
      };
    case actionTypes.UPDATE_FILTER_MIN_SIZE:
      return {
        ...state,
        minSize: action.payload,
      };
    case actionTypes.UPDATE_FILTER_MAX_SIZE:
      return {
        ...state,
        maxSize: action.payload,
      };
    case actionTypes.UPDATE_FILTER_BREAKFAST:
      return {
        ...state,
        breakfast: action.payload,
      };
    case actionTypes.UPDATE_FILTER_PETS:
      return {
        ...state,
        pets: action.payload,
      };
    case actionTypes.INITIALIZE_ROOMS_SUCCESS:
      return {
        ...state,
        rooms: action.payload,
      };
    case actionTypes.INITIALIZE_FEATURED_ROOMS:
      return {
        ...state,
        featuredRooms: state.rooms.filter(
          (room) => room.fields.featured === true
        ),
      };
    case actionTypes.INITIALIZE_MAX_PRICE:
      return {
        ...state,
        maxPrice: Math.max(...state.rooms.map((item) => item.fields.price)),
      };
    case actionTypes.INITIALIZE_MAX_SIZE:
      return {
        ...state,
        maxSize: Math.max(...state.rooms.map((item) => item.fields.size)),
      };
    case actionTypes.INITIALIZE_PRICE:
      return {
        ...state,
        price: state.maxPrice,
      };
    case actionTypes.UPDATE_SORTED_ROOMS:
      return {
        ...state,
        sortedRooms: action.payload,
      };
    case actionTypes.SET_BOOK_DAYS:
      return {
        ...state,
        bookDays: action.payload,
      };
    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        isVisible: true,
      };
    case actionTypes.HIDE_MODAL:
      return {
        ...state,
        isVisible: false,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  hotel: reducer,
});

export default rootReducer;
