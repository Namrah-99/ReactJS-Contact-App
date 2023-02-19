import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../images/hgghgh.jpg";
const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  const handleClick = () => {
    // 👇️ toggle shown state
    // setIsShown((current) => !current);
    props.isShownlist(false);
    props.clickHander(props.contact);
  };
  return (
    <>
      <div className="ui grid list" key={id}>
        <div classNmae="two wide column">
          <img className="ui tiny avatar image" src={image} alt="user" />
        </div>
        <div className="eight wide column middle aligned content">
          <Link to={`/contact/${id}`} state={props.contact}>
            <div className="ui pink header">{name}</div>
            <div className="ui violet sub header">{email}</div>
          </Link>
        </div>
        <div className="six wide column right aligned">
          <i
            className="trash alternate outline right floated icon big bb"
            style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
            onClick={handleClick}
          ></i>
          <Link to={"/edit"} state={props.contact}>
            <i
              className="edit alternate outline right floated icon big bb"
              style={{ color: "blue", marginTop: "7px" }}
            ></i>
          </Link>
        </div>
      </div>
    </>
  );
};
export default ContactCard;
