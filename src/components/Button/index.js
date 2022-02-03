import React from "react";
import styles from "./Button.css";

const Button = (props) => (
    <button className="answer" onClick={props.onClick}>
        {props.text}
    </button>
);
export default Button;
