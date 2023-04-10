import React from 'react';
import './Home.css'
import {Link, useLoaderData} from 'react-router-dom'
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {

    const companies = useLoaderData()
    
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

            {/* job-catagory-list --------------------------  */}

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

            {/* Featured job ------------------------------  */}

            <section className='featured-section'>
                <div>
                    <h1 className='featured-section-heading'>Featured Job</h1>
                    <p className='featued-p'>Explore thousands of job opportunities with all the information you need. Its your future</p>                    
                    <div className='company-box'>
                        {
                            companies.map(company => <FeaturedJobs
                            key={company.id}
                            company={company.company}
                            ></FeaturedJobs>)
                        }
                    </div>
                    <div className='see-all-btn-div'><button className='main-btn see-all-btn'>See All</button></div>
                </div>
            </section>
        </>
    );
};

export default Home;