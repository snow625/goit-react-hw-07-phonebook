import { combineReducers } from "@reduxjs/toolkit";

import itemsReducer from "./contacts-items/contacts-items-reducer-slice";
import filterReducer from "./contacts-filter/contacts-filter-reducer-slice";

const contactsReduce = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReduce;
