import React from 'react';
import Lottie from 'lottie-react'
import {Link} from 'react-router-dom'
import errorAnimation from '../../../public/98642-error-404.json'
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className='error-page'>
            <Lottie className='error-animation' animationData={errorAnimation} loop={true}></Lottie>
            <div className='error-btn-div'>
            <Link to="/"><button className="main-btn error-btn">Go to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;