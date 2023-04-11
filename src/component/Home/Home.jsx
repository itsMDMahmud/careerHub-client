import React, { createContext, useEffect, useState } from 'react';
import './Home.css'
import {Link, useLoaderData} from 'react-router-dom'
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
// import JobCatagory from '../JobCatagory/JobCatagory';

const Home = () => {

   const [companies, setCompanies] = useState ([]);
   const [visible, setVisible] = useState(4);

   const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
   }

   useEffect(() => {
    fetch('CompanyData.json')
    .then((res) => res.json())
    .then((data) => setCompanies(data));
   }, []);


    
    return (
        <>
            {/* first section  */}

            <div className='upper-section'>
                <div className='upper-section-left'>
                    <h1 className='main-heading'>One step closer to your <span className='dream-job'>dream job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <Link to="appliedjobs"><button className="main-btn">Get Started</button></Link>

                </div>
                <div> <img className='main-img' src="https://i.ibb.co/RhRB5gP/corporateimg.png" alt="" /></div>
            </div>

            {/* job-catagory-list --------------------------  */}

            <div className='job-catagory-list'>
                <h1>Job catagory list</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='acme'>
                    {/* <JobCatagory></JobCatagory> */}
                    <div className='acme-single'>
                        <div> <img src="https://i.ibb.co/4f537Y0/accounts-1.png" alt="image" /></div>
                        <h2>Account & Finance</h2>
                        <p>300+ Jobs Available</p>
                    </div>
                    <div className='acme-single'>
                        <div> <img src="https://i.ibb.co/fYJmt0M/business-1.png" alt="image" /></div>
                        <h2>Creative Design</h2>
                        <p>100+ Jobs Available</p>
                    </div>
                    <div className='acme-single'>
                        <div> <img src="https://i.ibb.co/44n6tz0/social-media-1.png" alt="image" /></div>
                        <h2>Marketing & Sales</h2>
                        <p>150+ Jobs Available</p>
                    </div>
                    <div className='acme-single'>
                        <div> <img src="https://i.ibb.co/RgYcsR6/chip-1.png" alt="image" /></div>
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
                            companies.slice(0, visible).map(company => <FeaturedJobs
                            key={company.company.id}
                            company={company.company}
                            ></FeaturedJobs>)
                        }
                    </div>
                    <div className='see-all-btn-div'><button onClick={showMoreItems} className='main-btn see-all-btn'>See All</button></div>
                </div>
            </section>
        </>
    );
};

export default Home;