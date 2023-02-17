import React, { useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import image from "../images/hgghgh.jpg";
import DeleteContact from "./DeleteContact";
const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);
    props.isShownlist(isShown);
  };
  return (
    <>
      {!isShown ? (
        <div key={id} className="item">
          <img className="ui tiny avatar image" src={image} alt="user" />
          <div className="content">
            <Link to={`/contact/${id}`} state={props.contact}>
              <div className="header">{name}</div>
              <div>{email}</div>
            </Link>
          </div>
          <i
            className="trash alternate outline right floated icon big bb"
            style={{ color: "red", marginTop: "7px" }}
            onClick={handleClick}
          ></i>
        </div>
      ) : (
        <div class="ui active mini modal">
          <i class="close icon"></i>
          <div class="header">Deleting Contact</div>
          <div class="image content">
            <div class="ui medium image">
              <img className="ui small avatar image" src={image} alt="user" />
            </div>
            <div class="description">
              <div class="ui header">Do you really want to delete this?</div>
              <div class="description">
                <p>Name : {props.contact.name}</p>
                <p>Email : {props.contact.email}</p>
              </div>
            </div>
          </div>
          <div class="actions">
            <i
              class="ui black deny button"
              onClick={() => {
                setIsShown(false);
                props.isShownlist(isShown);
              }}
            >
              Nope
            </i>
            <button
              class="ui positive right labeled icon button"
              onClick={() => props.clickHander(id)}
            >
              {" "}
              Yep, that's me
              <i class="checkmark icon"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default ContactCard;
