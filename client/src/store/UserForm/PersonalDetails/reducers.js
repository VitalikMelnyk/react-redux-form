import { SET_PERSONAL_FIELD } from "./actionTypes";

const initialState = {
  firstName: "",
  secondName: "",
  gender: "",
  birthdayDate: new Date(),
  email: "",
  password: "",
  errors: []
};

export const PersonalDetailsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_PERSONAL_FIELD:
      return { ...state, [payload.name]: payload.value };
    default:
      return state;
  }
};
