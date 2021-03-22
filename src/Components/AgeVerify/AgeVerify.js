import "./_AgeVerify.scss";
import React from "react";
import { withRouter } from "react-router";

const AgeVerify = (props) => {
  return (
    <div className="age-verify">
      <div>You must be at least 18 Years old in order to enter</div>
      <div>Are you 18 years old or older?</div>
      <div className="verify-btns">
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
    </div>
  );
};

export default withRouter(AgeVerify);
