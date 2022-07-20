import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";

import {
  fetchContacts,
  removeContact,
  addContact,
} from "./redux/contacts/contacts-operation";
import { getContacts } from "./redux/contacts/contacts-selector";
import { useDispatch } from "react-redux";

import Contacts from "./components/Contacts";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";

import "./index.css";

const App = () => {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  const contactsStore = useSelector(getContacts);
  const { items, error, loading } = contactsStore;
  const filteredItems = () => {
    if (!filter) {
      return items;
    }
    const newItems = items.filter((e) => {
      const { name } = e;
      return name.toLowerCase().includes(filter.toLowerCase());
    });
    return newItems;
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddPhone = useCallback(
    (obj) => dispatch(addContact(obj)),
    [dispatch]
  );
  const onRemovePhone = useCallback(
    (id) => {
      dispatch(removeContact(id));
    },
    [dispatch]
  );

  const changeFilterState = useCallback(
    ({ target: { value } }) => setFilter(value.trim()),
    [setFilter]
  );

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={onAddPhone} />

      <h2 className="title">Contacts</h2>
      <Filter onChange={changeFilterState} />
      {loading && <p>Loading...</p>}
      {error && <p>{`Error: ${error}`}</p>}
      {items.length > 0 && !error && !loading && (
        <Contacts items={filteredItems()} onClick={onRemovePhone} />
      )}
    </div>
  );
};

export default App;
