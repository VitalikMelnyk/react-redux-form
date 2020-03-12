import { SET_PAYMENT_FIELD, SET_PAYMENT_ERRORS } from "../actionTypes";

const initialState = {
  bankName: "",
  paymentType: "",
  holderName: "",
  cardNumber: "",
  cvcCode: "",
  errors: {}
};

export const PaymentDetailsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_PAYMENT_FIELD:
      return { ...state, [payload.name]: payload.value };
    case SET_PAYMENT_ERRORS:
      return { ...state, errors: payload };
    default:
      return state;
  }
};
