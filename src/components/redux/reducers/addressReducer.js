// reducers/addressReducer.js
import { createReducer } from "@reduxjs/toolkit";
import { setOfAddress } from "../actions/addressAction";

const initialState = {
  street: "",
  city: "",
  state: "",
  zip: "",
  country: "",
};

const addressReducer = createReducer(initialState, {
  [setOfAddress]: (state, action) => action.payload,
});

export default addressReducer;
