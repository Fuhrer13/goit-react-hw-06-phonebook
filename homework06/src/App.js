import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "./Redux/Actions/Filter";
import { deleteContacts } from "./Redux/Actions/Contacts";

import Contacts from "./Components/Contacts/Contacts";
import ContactsFilter from "./Components/Filter/Filter";
import Phonebook from "./Components/Phonebook/Phonebook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./App.module.css";
import { CSSTransition } from "react-transition-group";
import pop from "./Transitions/pop.module.css";
toast.configure();

const App = () => {
  const dispatch = useDispatch();
  const contactsArr = useSelector((state) => state.contacts);
  const filtered = useSelector((state) => state.filter);

  const changeHandler = (e) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };

  const deleteContact = (id) => {
    dispatch(deleteContacts(id));
  };

  const filteredContacts = contactsArr.filter(({ name }) => {
    return name.toLowerCase().includes(filtered.toLowerCase());
  });

  return (
    <>
      <div className={classes.container}>
        <CSSTransition in classNames="title" timeout={500} appear>
          <h2 className={classes.title}>Phonebook</h2>
        </CSSTransition>
        <Phonebook />
        <ToastContainer autoClose={5000} />
        {contactsArr.length >= 2 && (
          <CSSTransition timeout={250} classNames={pop}>
            <ContactsFilter filter={filtered} changeFilter={changeHandler} />
          </CSSTransition>
        )}
        <Contacts
          filteredContacts={filteredContacts}
          onDelete={deleteContact}
        />
      </div>
    </>
  );
};

export default App;
