import React from "react";
import "./_Header.scss";
import pathLogo from "../../images/path-logo-smol.png";

export default function Header(props) {
  return (
    <div className="header">
      <img className="logo" src={pathLogo} alt="" />
      <div className="ButtonBox">
        <button
          className="header-link"
          onClick={() => props.history.push("/Events")}
        >
          EVENTS
        </button>
        <button
          className="header-link"
          onClick={() => props.history.push("/Blog")}
        >
          BLOG
        </button>
        <button
          className="header-link"
          onClick={() => props.history.push("/Announcements")}
        >
          ANNOUNCEMENTS
        </button>
        <button
          className="header-link"
          onClick={() => props.history.push("/MailList")}
        >
          MAILING LIST
        </button>
      </div>
    </div>
  );
}
