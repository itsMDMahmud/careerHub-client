import React from 'react';
import './JobCatagory.css'
import { useLoaderData } from 'react-router-dom';

const JobCatagory = () => {

    // const allData = useLoaderData()
    console.log(allData);
    return (
        <>            
             <div>
             {
                allData.map(singleData =>  
                <div className='acme'>
                    <div className='acme-single' key={singleData.id} >
                    <div> <img src={singleData.company_image} alt="image" /></div>
                    <h2>{singleData.job_title}</h2>
                    <p>300+ Jobs Available</p>
                    </div>
                </div>

                )
            }
             </div>
        </>
    );
};

export default JobCatagory;