import axios from "axios";
import * as actionTypes from "./types";

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
export const initializeRooms = (rooms) => (dispatch) => {
  dispatch({ type: actionTypes.INITIALIZE_ROOMS_SUCCESS, payload: rooms });
};
export const initializeFeaturedRooms = () => (dispatch) => {
  dispatch({ type: actionTypes.INITIALIZE_FEATURED_ROOMS });
};
export const initializeMaxPrice = () => (dispatch) => {
  dispatch({ type: actionTypes.INITIALIZE_MAX_PRICE });
};
export const initializeMaxSize = () => (dispatch) => {
  dispatch({ type: actionTypes.INITIALIZE_MAX_SIZE });
};
export const initializePrice = () => (dispatch) => {
  dispatch({ type: actionTypes.INITIALIZE_PRICE });
};
export const updateSortedRooms = (rooms) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_SORTED_ROOMS, payload: rooms });
};

/* Room Book Actions */
export const setBookDays = (days) => (dispatch) => {
  dispatch({ type: actionTypes.SET_BOOK_DAYS, payload: days });
};
