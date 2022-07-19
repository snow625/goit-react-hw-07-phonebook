import * as action from "../phoneBook/phoneBook-actions";
import * as phoneBookApi from "../../shared/services/API/phoneBook";

export const fetchPhoneBookItems = () => {
  const func = async (dispath, getStore) => {
    dispath(action.getPhoneBookitemsRequest());
    try {
      const data = await phoneBookApi.getPhoneBookItems();
      dispath(action.getPhoneBookitemsSuccess(data));
    } catch (error) {
      dispath(action.getPhoneBookitemsError());
    }
  };
  return func;
};

export const addPhoneBookItem = (newObjData) => {
  const func = async (dispath, getStore) => {
    const { contacts } = getStore();
    const isInclude = contacts.items.find(
      (e) => e.name.toLowerCase() === newObjData.name.toLowerCase()
    );
    if (isInclude) {
      return alert(`${newObjData.name} is already in your contacts`);
    }
    dispath(action.addPhoneBookItemRequest());
    try {
      const data = await phoneBookApi.addPhoneBookItem(newObjData);

      dispath(action.addPhoneBookItemSuccess(data));
    } catch (error) {
      dispath(action.addPhoneBookItemError());
    }
  };
  return func;
};

export const removePhoneBookItem = (id) => {
  const func = async (dispath, getStore) => {
    dispath(action.removePhoneBookItemRequest());
    try {
      const data = await phoneBookApi.deletePhoneBookItem(id);
      dispath(action.removePhoneBookItemSuccess(data.id));
    } catch (error) {
      dispath(action.removePhoneBookItemError());
    }
  };
  return func;
};
