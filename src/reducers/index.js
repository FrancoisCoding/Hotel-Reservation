import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";

const initialState = {
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  hotel: reducer,
});

export default rootReducer;
