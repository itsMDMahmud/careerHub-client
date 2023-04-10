import React from 'react';
import {Link, useLoaderData} from 'react-router-dom'
import './FeaturedJobs.css'

const FeaturedJobs = ({company}) => {
    // const fourCompany = company.slice(0,4);
    const {company_image, post_name, company_name, location, salary_range,id, job_catagory} = company;
    console.log(id);
    // console.log(company);
    return (
        <div className='feature-single-card'>
            <img src={company_image} alt="image" />
            <h3>{post_name}</h3>
            <h4>{company_name}</h4>
            <div className='gradient-main-div'>                
                    <button className='Rem-ft'>Remote</button>                
                    <button className='Rem-ft'>Fulltime</button> 
            </div>
            <p className='job-card-p'><span><img src="https://i.ibb.co/bFQXBW8/Frame-4.png" alt="" /></span>{location}</p>
            <p className='job-card-p'><span><img src="https://i.ibb.co/8g2dNLV/Frame.png" alt="" /></span>{salary_range}</p>
            
            
            <Link to={`job-details/${id}`}><button className="main-btn">View Details</button></Link>
        </div>
    );
};

export default FeaturedJobs;