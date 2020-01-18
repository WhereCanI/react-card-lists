import React, { useState, useEffect, useRef } from "react";
export default function ItemDescription(props) {
    return (
        <p 
            className={props.className ? `ItemDesc ${props.className}` : "ItemDesc"}
            role={props.role ? props.role : ""}>
            {props.children}
        </p>
    );
}