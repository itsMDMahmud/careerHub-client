import React from 'react';
import './Home.css'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <>
            {/* first section  */}

            <div className='upper-section'>
                <div>
                    <h1 className='main-heading'>One step <br /> closer to your <br /> <span className='dream-job'>dream job</span></h1>
                    <p>Explore thousands of job opportunities with all the information <br />  you need. Its your future. Come find it. Manage all your job  <br /> application from start to finish.</p>
                    <Link to="appliedjobs"><button className="main-btn">Get Started</button></Link>

                </div>
                <div> <img src="../../../public/corporateimg.png" alt="" /></div>
            </div>

            {/* second section  */}

            <div className='job-catagory-list'>
                <h1>Job catagory list</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='acme'>
                    <div className='acme-single'>
                        <div> <img src="../../../public/Icons/accounts 1.png" alt="image" /></div>
                        <h2>Account & Finance</h2>
                        <p>300+ Jobs Available</p>
                    </div>
                    <div className='acme-single'>
                        <div> <img src="../../../public/Icons/business 1.png" alt="image" /></div>
                        <h2>Creative Design</h2>
                        <p>100+ Jobs Available</p>
                    </div>
                    <div className='acme-single'>
                        <div> <img src="../../../public/Icons/social-media 1.png" alt="image" /></div>
                        <h2>Marketing & Sales</h2>
                        <p>150+ Jobs Available</p>
                    </div>
                    <div className='acme-single'>
                        <div> <img src="../../../public/Icons/chip 1.png" alt="image" /></div>
                        <h2>Engineering Job</h2>
                        <p>220+ Jobs Available</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;