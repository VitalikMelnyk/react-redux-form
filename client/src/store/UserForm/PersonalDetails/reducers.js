import { SET_FIELD } from "./actionTypes";

const initialState = {
  firstName: "",
  secondName: "",
  gender: "",
  birthdayDate: new Date(),
  email: "",
  password: ""
};

export const PersonalDetailsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_FIELD:
      return { ...state, [payload.name]: payload.value };
    default:
      return state;
  }
};
