import React, { useState, useEffect, useRef } from "react";
export default function DescriptionWrapper(props) {
    return (
        <div className={props.className ? `DescriptionWrapper ${props.className}` : "DescriptionWrapper"}>
            {props.children}
        </div>
    );
}