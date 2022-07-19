import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as actions from "./phoneBook-actions";

const itemsReducer = createReducer([], {
  [actions.getPhoneBookitemsSuccess]: (store, { payload }) => [...payload],

  [actions.addPhoneBookItemSuccess]: (store, { payload }) => {
    return [...store, payload];
  },

  [actions.removePhoneBookItemSuccess]: (store, { payload }) =>
    store.filter(({ id }) => id !== payload),
});

const loadingReducer = createReducer(false, {
  [actions.getPhoneBookitemsRequest]: () => true,
  [actions.getPhoneBookitemsSuccess]: () => false,
  [actions.getPhoneBookitemsError]: () => false,

  [actions.addPhoneBookItemRequest]: () => true,
  [actions.addPhoneBookItemSuccess]: () => false,
  [actions.addPhoneBookItemError]: () => false,

  [actions.removePhoneBookItemRequest]: () => true,
  [actions.removePhoneBookItemSuccess]: () => false,
  [actions.removePhoneBookItemError]: () => false,
});

const errorReducer = createReducer(null, {
  [actions.getPhoneBookitemsRequest]: () => null,
  [actions.getPhoneBookitemsError]: (_, { payload }) => payload,

  [actions.addPhoneBookItemRequest]: () => null,
  [actions.addPhoneBookItemError]: (_, { payload }) => payload,

  [actions.removePhoneBookItemRequest]: () => null,
  [actions.removePhoneBookItemError]: (_, { payload }) => payload,
});

const filterReducer = createReducer("", {
  [actions.changeFilterName]: (_, { payload }) => payload,
});

const phoneBookReducer = combineReducers({
  items: itemsReducer,
  loading: loadingReducer,
  error: errorReducer,
  filter: filterReducer,
});

export default phoneBookReducer;
