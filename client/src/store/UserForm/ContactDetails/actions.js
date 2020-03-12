import { SET_CONTACT_FIELD, SET_CONTACT_ERRORS } from "../actionTypes";

export const setContactField = payload => ({
  type: SET_CONTACT_FIELD,
  payload
});
export const setContactErrors = payload => ({
  type: SET_CONTACT_ERRORS,
  payload
});
