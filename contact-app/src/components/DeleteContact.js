import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
export default function DeleteContact(props) {
  return (
    <div className="ui basic modal" style={{ marginBlock: "6rem" }}>
      <div className="ui card centered">
        Do you really want to delete this contact?
      </div>
      <div className="ui middle aligned divided list">
        <div className="item">
          <div className="right floated content">
            <Link to="/">
              <button className="ui button center">No</button>
            </Link>
          </div>
          <div className="content">
            <Link to="/">
              <button
                className="ui button center handleClick"
                onClick={() => props.del(props.id)}
              >
                Yes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
$(document).ready(() => {
  $(".handleClick").click(() => {
    return (
      <div class="ui info message">
        <i class="close icon"></i>
        <div class="header">Successfully deleted!</div>
      </div>
    );
  });
});
