import {
  ACTIVE_STEP_INCREMENT,
  ACTIVE_STEP_DECRAMENT,
  ACTIVE_STEP_RESET,
  ADD_DATA_TO_ALL_INFORMATION
} from "./actionTypes";

export const handleActiveStepNext = payload => ({
  type: ACTIVE_STEP_INCREMENT
});

export const handleActiveStepBack = payload => ({
  type: ACTIVE_STEP_DECRAMENT
});

export const handleActiveStepReset = payload => ({
  type: ACTIVE_STEP_RESET
});

export const addDataToAllInformation = payload => ({
  type: ADD_DATA_TO_ALL_INFORMATION,
  payload
});
