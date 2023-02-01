import React from "react";

export default function Textarea(prop) {
    return (
        <textarea id={prop.id} name={prop.name} cols={prop.cols} rows={prop.rows} placeholder={prop.placeholder} required></textarea>
    );
}