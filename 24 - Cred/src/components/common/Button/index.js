import React from "react"
import "./button.css"

const Button = ({buttonText , onClick , customclass, prefix}) => {
    return (
    <div className={`flex absolute-center button-wrapper ${customclass}`} onClick={onClick}>
        {prefix} {buttonText}
    </div>
    );
};
export default Button;