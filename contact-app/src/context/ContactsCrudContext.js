import { createContext, useContext, useState } from "react";
import api from "../api/contacts";

const contactsCrudContext = createContext();

export function ContactsCrudContextProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    if (response.data) setContacts(response.data);
  };
  //AddContacts
  const addContactHandler = async (contact) => {
    const request = {
      id: `${contact.email}_${new Date().getTime()}`,
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };
  //UpdateContacts
  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };
  //RemoveContacts
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };
  //SearchFunctionality
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  //exporting handlers and variales
  const value = {
    contacts,
    searchTerm,
    searchResults,
    searchHandler,
    addContactHandler,
    retrieveContacts,
    removeContactHandler,
    updateContactHandler,
  };

  return (
    <contactsCrudContext.Provider value={value}>
      {children}
    </contactsCrudContext.Provider>
  );
}

// custom context function
export function useContactsCrud() {
  return useContext(contactsCrudContext);
}
