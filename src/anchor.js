import React, { useState, useEffect, useRef } from "react";
export default function Anchor(props) {
    return (
        <a 
            href={props.href ? props.href : "#"}
            role={props.role ? props.role : ""}
            target={props.target ? props.target : "_self"}
            className={props.className ? props.className: ""}
            title={props.title ? props.title : ""}
        >{props.children}</a>
    );
}