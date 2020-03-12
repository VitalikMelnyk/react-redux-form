import { SET_PAYMENT_FIELD, SET_PAYMENT_ERRORS } from "../actionTypes";
export const setPaymentField = payload => ({
  type: SET_PAYMENT_FIELD,
  payload
});

export const setPaymentErrors = payload => ({
  type: SET_PAYMENT_ERRORS,
  payload
});
