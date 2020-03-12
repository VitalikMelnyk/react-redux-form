import { SET_PERSONAL_FIELD, SET_PERSONAL_ERRORS } from "../actionTypes";

export const setPersonalField = payload => ({
  type: SET_PERSONAL_FIELD,
  payload
});

export const setPersonalErrors = payload => ({
  type: SET_PERSONAL_ERRORS,
  payload
});
