import React from 'react';
import './Main.css'
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
        <>            
            <Header></Header>
            <div className='outlet'><Outlet></Outlet></div>
            <Footer></Footer>
        </>
    );
};

export default Main;