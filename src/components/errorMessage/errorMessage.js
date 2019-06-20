import React, {Component} from 'react';
import './errorMessage.css';
import img from './oops.png';

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt='error'></img>
            <span>Something gone wrong</span>
        </>
    )
}

export default ErrorMessage;