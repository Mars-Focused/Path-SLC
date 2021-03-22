import "./_AgeVerify.scss";
import React from "react";
import { withRouter } from "react-router";

const AgeVerify = (props) => {
  return (
    <div className="age-verify">
      <a className="verify-btn" href="https://www.google.com/">
        No
      </a>
      <button
        className="verify-btn"
        onClick={() => props.history.push("/About")}
      >
        Yes
      </button>
    </div>
  );
};

export default withRouter(AgeVerify);
