import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getItems,
  deleteItem,
  addItem,
} from "../../shared/services/API/phoneBook";

export const fetchContacts = createAsyncThunk(
  "contacts/fetch",
  async (data, { rejectWithValue }) => {
    try {
      return await getItems();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeContact = createAsyncThunk(
  "contacts/remove",
  async (data, { rejectWithValue }) => {
    try {
      return await deleteItem(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/add",
  async (data, { rejectWithValue }) => {
    try {
      return addItem(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      const isInclude = contacts.items.find((el) => el.name === data.name);
      if (isInclude) {
        alert(`${data.name} you have in the contacts`);
        return false;
      }
    },
  }
);
