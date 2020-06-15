import { ADD_CONTACT, DELETE_CONTACT } from "../Types/Types";

export const addContact = (data) => ({
  type: ADD_CONTACT,
  payload: data,
});

export const deleteContacts = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

// export const getLocalStorage = (arr) => ({
//   type: GET_LOCALSTORAGE,
//   payload: arr,
// });
