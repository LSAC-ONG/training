import React from "react";
import "./CarouselButton.css";

/**
 * Receives an icon and a function to be called on click.
 */
export default function CarouselButton(props) {
    return(
        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
            <span className="material-icons" onClick={props.onClick}>
                {props.icon}
            </span>
        </div>
    );
}
