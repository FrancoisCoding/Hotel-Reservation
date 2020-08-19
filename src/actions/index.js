import axios from "axios";
import * as actionTypes from "./types";

const apiUrl = process.env.REACT_APP_API_URL;

/* Update Filter Actions */
export const updateFilterType = (type) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_FILTER_TYPE, payload: type });
};
export const updateFilterCapacity = (capacity) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_FILTER_CAPACITY, payload: capacity });
};
export const updateFilterPrice = (price) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_FILTER_PRICE, payload: price });
};
export const updateFilterMinPrice = (minPrice) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_FILTER_MIN_PRICE, payload: minPrice });
};
export const updateFilterMaxPrice = (maxPrice) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_FILTER_MAX_PRICE, payload: maxPrice });
};
export const updateFilterMinSize = (minSize) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_FILTER_MIN_SIZE, payload: minSize });
};
export const updateFilterMaxSize = (maxSize) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_FILTER_MAX_SIZE, payload: maxSize });
};
export const updateFilterBreakfast = (breakfast) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_FILTER_BREAKFAST, payload: breakfast });
};
export const updateFilterPets = (pets) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_FILTER_PETS, payload: pets });
};

/* Room Actions */
export const updateSortedRooms = (rooms) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_SORTED_ROOMS, payload: rooms });
};
