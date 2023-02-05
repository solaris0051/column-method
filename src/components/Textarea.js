import React from "react";

export default function Textarea(props) {
    return (
        <textarea id={props.id} name={props.name} cols={props.cols} rows={props.rows} placeholder={props.placeholder} required></textarea>
    );
}