import { SUBMIT_PERSONAL_DETAILS, SET_FIELD } from "./actionTypes";

export const setField = payload => ({
  type: SET_FIELD,
  payload
});

export const submitPersonalDetails = payload => ({
  type: SUBMIT_PERSONAL_DETAILS,
  payload
});
