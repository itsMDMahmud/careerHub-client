import React from 'react';
// , { useState }
import './AppliedJobs.css'
import { useLoaderData } from 'react-router-dom';
import HeaderDesign from '../HeaderDesign/HeaderDesign';

const AppliedJobs = () => {
    const applieds = useLoaderData();
    // const [applied, setApplied] =useState(applieds);
    // console.log(applied);

    // const handleFilterJobs = filterData => {
    //     const remoteJob = applieds.filter(job => job.job_type ==filterData)
    //     setApplied(remoteJob);
    // }

    // const handleShowDetails = (id) => {
    //     // console.log(typeof id);
    //     const searchObject = applied.find((j) => j.id == parseInt(id));
    //     localStorage.setItem('job-details', JSON.stringify(searchObject));
    //     console.log(id);
    // }
    console.log(applieds);
    return (
        <>
            <div className='header-design-div'><HeaderDesign></HeaderDesign></div>
            <div className="common-headline-div"><h1 className="blog-heading">Applied Jobs</h1></div>
            <div className='applied-job'>
            {/* <h2>This is applied jobs</h2> */}
            {
                applieds.map(job=> 
                <div className='job-box'>
                    <div className='job-left-side'>
                        <div className='job-left-img'><img src={job.company.company_image} alt="" /></div>
                        <div className='job-left-ess-div'>
                            <h2>{job.company.job_title}</h2>
                            <p>{job.company.company_name}</p>
                            <div>
                                <button className='Rem-ft'>Remote</button>
                                <button className='Rem-ft'>Full Time</button>
                            </div>
                            <p className='job-card-p'><span><img src="https://i.ibb.co/bFQXBW8/Frame-4.png" alt="" /></span>{job.company.location}</p>
                            <p className='job-card-p'><span><img src="https://i.ibb.co/8g2dNLV/Frame.png" alt="" /></span>{job.company.salary_range}</p>
                        </div>
                    </div>
                    <button className='main-btn'>View Details</button>  
                                  
                </div>
                )
            }
        </div>
        </>
    );
};

export default AppliedJobs;
