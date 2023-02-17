import React, { useState } from "react"; //#endregion
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
const ContactList = (props) => {
  //   console.log(props);
  const [isShownlist, setIsShownlist] = useState(false);
  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  const listHandler = (id) => {
    setIsShownlist((current) => !current);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        isShownlist={listHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div className="ui main" style={{ marginTop: "5rem" }}>
      <div className="ui middle aligned divided list">
        <div className="item">
          <div className="right floated content">
            <Link to="/add">
              <button className="ui button blue">Add Contact</button>
            </Link>
          </div>
          <div className="content">
            <h2>Contact List</h2>
          </div>
        </div>
      </div>
      <div className="ui section divider" style={{ marginTop: "5rem" }}></div>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};
export default ContactList;
