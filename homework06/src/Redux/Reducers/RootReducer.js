import { combineReducers } from "redux";
import { contactsReducer } from "./Contacts";
import filterReducer from "./Filter";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
