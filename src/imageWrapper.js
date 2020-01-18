import React, { useState, useEffect, useRef } from "react";
export default function ImageWrapper(props) {
    return (
        <div className={props.className ? `ImageWrapper ${props.className}` : "ImageWrapper"}>
            {props.children}
        </div>
    );
}