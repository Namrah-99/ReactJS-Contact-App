import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import DeleteContact from "./DeleteContact";

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
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(Local_Storage_Key)) ?? []
  );

  const generateKey = (pre) => {
    return `${pre.email}_${new Date().getTime()}`;
  };

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: generateKey(contact), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };
  /* useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(Local_Storage_Key)
    );
    alert(retrieveContacts);
    if (retrieveContacts) setContacts(retrieveContacts);
    // alert(contacts);
  }, []); */

  useEffect(() => {
    localStorage.setItem(Local_Storage_Key, JSON.stringify(contacts));
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
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
            // element={(props) => {
            //   <ContactList
            //     {...props}
            //     contacts={contacts}
            //     getContactId={removeContactHandler}
            //   />;
            // }}
            // element={() => (
            //   <ContactList
            //     contacts={contacts}
            //     getContactId={removeContactHandler}
            //   />
            // )}
          />
          <Route
            path="/add"
            // element={() => <AddContact addContactHandler={addContactHandler} />}
            // element={(props) => {
            //   <AddContact {...props} addContactHandler={addContactHandler} />;
            // }}
            element={
              <AddContact
                render={(props) => ({ ...props })}
                addContactHandler={addContactHandler}
              />
            }
          />{" "}
          <Route
            path="/contact/:id"
            // element={() => <AddContact addContactHandler={addContactHandler} />}
            // element={(props) => {
            //   <AddContact {...props} addContactHandler={addContactHandler} />;
            // }}
            element={<ContactDetail />}
          />
          <Route
            path="/deleteContact/:id"
            // element={() => <AddContact addContactHandler={addContactHandler} />}
            // element={(props) => {
            //   <AddContact {...props} addContactHandler={addContactHandler} />;
            // }}
            element={<DeleteContact />}
          />
        </Routes>

        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </Router>
    </div>
  );
}

export default App;
