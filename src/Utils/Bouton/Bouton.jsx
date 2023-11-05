import React from "react";
import "./Bouton.scss";
import PropTypes from "prop-types";

const Bouton = (props) => {
  return (
    <div className={`bouton ${props.className ?? ""}`}>
      <button onClick={props.btnAction}>{props.btnText}</button>
    </div>
  );
};

Bouton.propTypes = {
  className: PropTypes.string,
  btnAction: PropTypes.func,
  btnText: PropTypes.string,
};

export default Bouton;
