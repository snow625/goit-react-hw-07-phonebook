import { createAction } from "@reduxjs/toolkit";

export const getPhoneBookitemsSuccess = createAction("phoneBook/get/success");
export const getPhoneBookitemsRequest = createAction("phoneBook/get/request");
export const getPhoneBookitemsError = createAction("phoneBook/get/error");

export const addPhoneBookItemRequest = createAction("phoneBook/add/request");
export const addPhoneBookItemSuccess = createAction("phoneBook/add/success");
export const addPhoneBookItemError = createAction("phoneBook/add/error");

export const removePhoneBookItemRequest = createAction(
  "phoneBook/remove/request"
);
export const removePhoneBookItemSuccess = createAction(
  "phoneBook/remove/success"
);
export const removePhoneBookItemError = createAction("phoneBook/remove/error");

export const changeFilterName = createAction("phoneBook/change/filter");
