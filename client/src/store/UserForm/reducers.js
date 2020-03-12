import { combineReducers } from "redux";
import { PersonalDetailsReducer } from "./PersonalDetails/reducers";
import { ContactDetailsReducer } from "./ContactDetails/reducers";
import { PaymentDetailsReducer } from "./PaymentDetails/reducers";
import {
  ACTIVE_STEP_INCREMENT,
  ACTIVE_STEP_DECRAMENT,
  ADD_DATA_TO_ALL_INFORMATION,
  RESET_ALL_FORM,
  SET_THEME_TYPE
} from "./actionTypes";

const initialState = {
  checkedSwitch: false,
  themeType: "dark",
  activeStep: -1,
  allUserInformation: {}
};

const UserFormReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIVE_STEP_INCREMENT:
      return { ...state, activeStep: state.activeStep + 1 };
    case ACTIVE_STEP_DECRAMENT:
      return { ...state, activeStep: state.activeStep - 1 };
    case RESET_ALL_FORM:
      return initialState;
    case ADD_DATA_TO_ALL_INFORMATION:
      return {
        ...state,
        allUserInformation: { ...state.allUserInformation, ...payload }
      };
    case SET_THEME_TYPE:
      return {
        ...state,
        themeType: payload.newThemeType,
        checkedSwitch: !payload.checkedSwitch
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  UserFormReducer,
  PersonalDetailsReducer,
  ContactDetailsReducer,
  PaymentDetailsReducer
});

export default rootReducer;
