import {
  ACTIVE_STEP_INCREMENT,
  ACTIVE_STEP_RESET,
  ACTIVE_STEP_DECRAMENT
} from "./actionTypes";

const initialState = {
  activeStep: -1
};

export const UserFormReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIVE_STEP_INCREMENT:
      return { ...state, activeStep: state.activeStep + 1 };
    case ACTIVE_STEP_DECRAMENT:
      return { ...state, activeStep: state.activeStep - 1 };
    case ACTIVE_STEP_RESET:
      return { ...state, activeStep: (state.activeStep = 0) };
    default:
      return state;
  }
};
