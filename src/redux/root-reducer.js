import { combineReducers } from "@reduxjs/toolkit";

// import contactsReduce from "./contacts/contactsReduce";
import phoneBookReducer from "./phoneBook/phoneBook-reducer";

const rootReducer = combineReducers({
  contacts: phoneBookReducer,
});

export default rootReducer;
