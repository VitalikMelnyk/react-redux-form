import { SET_PERSONAL_FIELD, SET_PERSONAL_ERRORS } from "../actionTypes";
import { ACTIVE_STEP_INCREMENT, ACTIVE_STEP_DECRAMENT } from "../actionTypes";

const initialState = {
  firstName: "",
  secondName: "",
  gender: "",
  birthdayDate: new Date(),
  email: "",
  password: "",
  errors: {}
};

export const PersonalDetailsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_PERSONAL_FIELD:
      return { ...state, [payload.name]: payload.value };
    case SET_PERSONAL_ERRORS:
      return { ...state, errors: payload };
    case ACTIVE_STEP_INCREMENT:
      return { ...state, errors: {} };
    case ACTIVE_STEP_DECRAMENT:
      return { ...state, errors: {} };
    default:
      return state;
  }
};
