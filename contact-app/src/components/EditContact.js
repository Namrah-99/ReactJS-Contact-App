import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const EditContact = (props) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState(state.name);
  const [email, setEmail] = useState(state.email);
  const { updateContactHandler } = useContactsCrud();

  const update = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory");
      return;
    }
    updateContactHandler({ id: state.id, name, email });
    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <div className="ui main" style={{ marginTop: "5rem" }}>
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <button className="ui button blue">UPDATE</button>
      </form>
    </div>
  );
};
export default EditContact;
