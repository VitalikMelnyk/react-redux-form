import { SET_CONTACT_FIELD } from "./actionTypes";

const initialState = {
  telephoneNumber: "",
  country: {},
  city: "",
  address: "",
  zipCode: ""
};

export const ContactDetailsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_CONTACT_FIELD:
      return { ...state, [payload.name]: payload.value };
    default:
      return state;
  }
};
