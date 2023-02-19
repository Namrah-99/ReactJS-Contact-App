import React, { useState, useRef } from "react"; //#endregion
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import image from "../images/hgghgh.jpg";

const ContactList = (props) => {
  const [contactToDel, setContactToDel] = useState({});
  const inputEl = useRef("");
  const [isShownlist, setIsShownlist] = useState(true);
  const deleteConactHandler = (contact) => {
    setContactToDel(contact);
  };
  const listHandler = (c) => {
    setIsShownlist(c);
  };
  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
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

  return isShownlist ? (
    <div class="ui grid">
      <div class="sixteen wide column center aligned">
        <div class="ui segment">
          <h2>Contact List</h2>
        </div>
      </div>
      <div class="two column row">
        <div class="ui search left floated aligned eight wide column">
          <div className="fluid ui icon input">
            <input
              ref={inputEl}
              type="text"
              placeholder="Search Contacts"
              className="prompt"
              value={props.term}
              onChange={getSearchTerm}
            />
            <i className="search icon"></i>
          </div>
        </div>
        <div class="column right floated right aligned six wide column">
          <Link to="/add">
            <button className="ui button blue">Add Contact</button>
          </Link>
        </div>
      </div>
      <div class="sixteen wide column">
        <div class="ui segment">
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
      <div class="middle aligned row">
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
                props.getContactId(contactToDel.id);
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
