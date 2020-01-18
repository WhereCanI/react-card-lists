import React, { useState, useEffect, useRef } from "react";
export default function ItemTitle(props) {
    return (
        <h3 
            className={props.className ? `ItemList ${props.className}` : "ItemList"}
            role={props.role ? props.role : ""}
            title={props.title ? props.title: ""}
        >{props.children}</h3>
    );
}