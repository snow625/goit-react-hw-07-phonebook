import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

// import {
//   add,
//   remove,
// } from "./redux/contacts/contacts-items/contacts-items-reducer-slice";
// import { getContacts } from "./redux/contacts/contacts-items/contacts-items-selector";

// import { change } from "./redux/contacts/contacts-filter/contacts-filter-reducer-slice";
// import { getFilteredItems } from "./redux/contacts/contacts-filter/contacts-filter-selector";

import * as actions from "./redux/phoneBook/phoneBook-actions";
import {
  fetchPhoneBookItems,
  addPhoneBookItem,
  removePhoneBookItem,
} from "./redux/phoneBook/phoneBook-operation";
import { getFilteredItems } from "./redux/phoneBook/phoneBook-selector";
import { useDispatch } from "react-redux";

import Contacts from "./components/Contacts";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";

import "./index.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhoneBookItems());
  }, [dispatch]);

  const filteredItems = useSelector(getFilteredItems);

  const onAddPhone = useCallback(
    (obj) => dispatch(addPhoneBookItem(obj)),
    [dispatch]
  );
  const onRemovePhone = useCallback(
    (id) => {
      dispatch(removePhoneBookItem(id));
    },
    [dispatch]
  );

  const changeFilterState = useCallback(
    ({ target: { value } }) => {
      dispatch(actions.changeFilterName(value.trim()));
    },
    [dispatch]
  );

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={onAddPhone} />

      <h2 className="title">Contacts</h2>
      <Filter onChange={changeFilterState} />
      <Contacts items={filteredItems} onClick={onRemovePhone} />
    </div>
  );
};

export default App;
