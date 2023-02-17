import React from "react";
import { Link } from "react-router-dom";
import image from "../images/ase.jpg";
import { useLocation } from "react-router-dom";

const ContactDetail = (props) => {
  //   console.log(props);
  let { state } = useLocation();
  return (
    <div className="main" style={{ marginBlock: "6rem" }}>
      <div className="ui card centered">
        <div className="image">
          <img src={image} alt={state.name} />
        </div>
        <div className="content">
          <div className="header">{state.name}</div>
          <div className="description">{state.email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ContactDetail;
