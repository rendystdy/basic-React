import React from "react";

const Footer = (props) => {
    return (
        <div>
            <h4>footer {props.name}</h4>
            <p>2019 by {props.title}</p>
        </div>
    )
}

export default Footer