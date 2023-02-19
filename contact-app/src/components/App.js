import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import api from "../api/contacts";
import EditContact from "./EditContact";
/* const contacts = [
  {
    id: 1,
    name: "Namrah",
    email: "namrah2@gmail.com",
  },
  {
    id: 2,
    name: "Maleeha",
    email: "maleeha3@gmail.com",
  },
]; */
function App() {
  const Local_Storage_Key = "contacts";
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem(Local_Storage_Key)) ?? []
  // );
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const generateKey = (pre) => {
    return `${pre.email}_${new Date().getTime()}`;
  };

  const retrieveContact = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };
  const addContactHandler = async (contact) => {
    const request = {
      id: generateKey(contact),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
    // setContacts([...contacts, { id: generateKey(contact), ...contact }]);
  };

  const updateContactHandler = async (contact) => {
    console.log(contact);
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };
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
  useEffect(() => {
    /*  const retrieveContacts = JSON.parse(
      localStorage.getItem(Local_Storage_Key)
    );
    alert(retrieveContacts);
    if (retrieveContacts) setContacts(retrieveContacts); */
    // alert(contacts);
    const getAllContacts = async () => {
      const allContacts = await retrieveContact();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  useEffect(() => {
    // localStorage.setItem(Local_Storage_Key, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          {" "}
          <Route
            index
            path="/"
            element={
              <ContactList
                render={(props) => ({ ...props })}
                contacts={searchTerm.length < 1 ? contacts : searchResults}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            }
          />
          <Route
            path="/add"
            element={
              <AddContact
                render={(props) => ({ ...props })}
                addContactHandler={addContactHandler}
              />
            }
          />{" "}
          <Route path="/contact/:id" element={<ContactDetail />} />
          <Route
            path="/edit"
            element={
              <EditContact
                render={(props) => ({ ...props })}
                updateContactHandler={updateContactHandler}
              />
            }
          />
        </Routes>

        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </Router>
    </div>
  );
}

export default App;
