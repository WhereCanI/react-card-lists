import React, { useState, useEffect, useRef } from "react";
export default function Image(props) {
    return (
        <figure>
            <img 
                src={props.imageSrc} 
                alt={props.imageAlt ? props.imageAlt: ""}
                className={props.className ? props.className : ""}
                title={props.title ? props.title : ""}
            />
        </figure>
    );
}