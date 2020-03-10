import { SET_PAYMENT_FIELD } from "./actionTypes";

const initialState = {
  bankName: "",
  paymentType: "",
  holderName: "",
  cardNumber: "",
  cvcCode: ""
};

export const PaymentDetailsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_PAYMENT_FIELD:
      return { ...state, [payload.name]: payload.value };

    default:
      return state;
  }
};
