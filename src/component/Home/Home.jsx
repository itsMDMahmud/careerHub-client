import React from 'react';
import './Home.css'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className='upper-section'>
            <div>
            <h1 className='main-heading'>One step <br /> closer to your <br /> <span className='dream-job'>dream job</span></h1>
            <p>Explore thousands of job opportunities with all the information <br />  you need. Its your future. Come find it. Manage all your job  <br /> application from start to finish.</p>
            <Link to="appliedjobs"><button className="main-btn">Get Started</button></Link>

            </div>
            <div> <img src="../../../public/corporateimg.png" alt="" /></div>
        </div>
    );
};

export default Home;