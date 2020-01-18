import React, { useState, useEffect, useRef } from "react";
export default function ListItem(props) {

    const renderListItem = () => {
        if (props && props.customClasses) {
            return <li className={props.customClasses}>{props.children}</li>;
        } else {
            return <li>{props.children}</li>
        }
    }

    return renderListItem();
}