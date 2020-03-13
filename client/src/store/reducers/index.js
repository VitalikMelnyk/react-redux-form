import { combineReducers } from "redux";
import { UserFormReducer } from "../UserForm/reducers";
import { ContactDetailsReducer } from "../UserForm/ContactDetails/reducers";
import { PersonalDetailsReducer } from "../UserForm/PersonalDetails/reducers";
import { PaymentDetailsReducer } from "../UserForm/PaymentDetails/reducers";
import { ThemeReducer } from "../Theme/reducers";
export default combineReducers({
  UserFormReducer,
  ThemeReducer,
  PersonalDetailsReducer,
  ContactDetailsReducer,
  PaymentDetailsReducer
});
