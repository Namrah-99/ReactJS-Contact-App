import React, { useState, useRef, useEffect } from "react"; //#endregion
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import image from "../images/hgghgh.jpg";
import { useContactsCrud } from "../context/ContactsCrudContext";

const ContactList = (props) => {
  const {
    contacts,
    retrieveContacts,
    removeContactHandler,
    searchTerm,
    searchResults,
    searchHandler,
  } = useContactsCrud();

  const [contactToDel, setContactToDel] = useState({});

  const [isShownlist, setIsShownlist] = useState(true);

  const deleteConactHandler = (contact) => {
    setContactToDel(contact);
  };
  const listHandler = (c) => {
    setIsShownlist(c);
  };
  const onUserSearch = (e) => {
    searchHandler(e.target.value);
  };

  useEffect(() => {
    retrieveContacts();
  }, []);

  const renderContactList = (
    searchTerm.length < 1 ? contacts : searchResults
  ).map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        isShownlist={listHandler}
        key={contact.id}
      />
    );
  });

  return isShownlist ? (
    <div className="ui grid">
      <div className="sixteen wide column center aligned">
        <div className="ui segment">
          <h2>Contact List</h2>
        </div>
      </div>
      <div className="two column row">
        <div className="ui search left floated aligned eight wide column">
          <div className="fluid ui icon input">
            <input
              type="text"
              placeholder="Search Contacts"
              className="prompt"
              value={searchTerm}
              onChange={(e) => {
                onUserSearch(e);
              }}
            />
            <i className="search icon"></i>
          </div>
        </div>
        <div className="column right floated right aligned six wide column">
          <Link to="/add">
            <button className="ui button blue">Add Contact</button>
          </Link>
        </div>
      </div>
      <div className="sixteen wide column">
        <div className="ui segment">
          <div className="ui celled list">
            {renderContactList.length > 0
              ? renderContactList
              : "No Contacts available"}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="ui centered grid">
      <div className="middle aligned row">
        <div className="ui active fullscreen modal">
          <i className="close icon"></i>
          <div className="header">Deleting Contact</div>
          <div className="image content">
            <div className="ui medium image">
              <img className="ui small avatar image" src={image} alt="user" />
            </div>
            <div className="description">
              <div className="ui header">
                Do you really want to delete this?
              </div>
              <div className="description">
                <p>Name : {contactToDel.name}</p>
                <p>Email : {contactToDel.email}</p>
              </div>
            </div>
          </div>
          <div className="actions">
            <i
              className="ui black deny button"
              onClick={() => {
                setIsShownlist(true);
              }}
            >
              Nope
            </i>
            <button
              className="ui positive right labeled icon button"
              onClick={() => {
                removeContactHandler(contactToDel.id);
                setIsShownlist(true);
              }}
            >
              {" "}
              Yep, that's me
              <i className="checkmark icon"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactList;
