import React from "react";

export default function Todo(props) {
    return (
        <div className="wrapper">
            <label htmlFor={props.id}>
                <p>{props.name}<span>*</span></p>
            </label>
            <textarea id={props.id} name={props.name} cols="50" rows="4" placeholder={props.placeholder} required></textarea>
        </div>
    );
}
