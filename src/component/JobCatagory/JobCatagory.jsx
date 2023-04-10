import React from 'react';
import './JobCatagory.css'
import { useLoaderData } from 'react-router-dom';

const JobCatagory = () => {

    const jobCatagories = useLoaderData()
    console.log(jobCatagories);
    return (
        <>            
             <div>
             {
                jobCatagories.map(jobCatagory => <div className='acme-single'
                    key={jobCatagory.id}
                    // company={jobCatagory.company}
                >
                <div> <img src="../../../public/Icons/accounts 1.png" alt="image" />
                </div>
                <h2>{jobCatagory}</h2>
                <p>300+ Jobs Available</p>
                </div>)
            }
             </div>
        </>
    );
};

export default JobCatagory;