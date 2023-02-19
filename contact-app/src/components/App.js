import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";
import { ContactsCrudContextProvider } from "../context/ContactsCrudContext";

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
  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactsCrudContextProvider>
          <Routes>
            {" "}
            <Route index path="/" element={<ContactList />} />
            <Route path="/add" element={<AddContact />} />{" "}
            <Route path="/contact/:id" element={<ContactDetail />} />
            <Route path="/edit/:id" element={<EditContact />} />
          </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
