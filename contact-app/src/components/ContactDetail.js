import React from "react";
import { Link } from "react-router-dom";
import image from "../images/ase.jpg";
import { useLocation } from "react-router-dom";

const ContactDetail = () => {
  let { state } = useLocation();

  return (
    <div
      className="ui column center aligned middle"
      style={{ paddingBlock: "5rem" }}
    >
      <div className="ui card centered">
        <div className="image">
          <img src={image} alt={state.name} />
        </div>
        <div className="content">
          <div className="header">{state.name}</div>
          <div className="description">{state.email}</div>
        </div>
        <div className="ui yellow bottom attached button">
          <Link to="/">
            <button className="ui button black centered">
              Back to Contact List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ContactDetail;
