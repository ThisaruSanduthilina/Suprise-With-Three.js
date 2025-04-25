import React from 'react';
import './Button.css'; // Assuming you have a CSS file for button styles

const Button = ({ onClick, children }) => {
    return (
        <button className="custom-button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;