import React, { useState } from 'react';
import './AppliedJobs.css'
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const applieds = useLoaderData();
    const [applied, setApplied] =useState(applieds);
    // console.log(applied);

    const handleFilterJobs = filterData => {
        const remoteJob = applieds.filter(job => job.job_type ==filterData)
        setApplied(remoteJob);
    }

    const handleShowDetails = (id) => {
        // console.log(typeof id);
        const searchObject = applied.find((j) => j.id == parseInt(id));
        localStorage.setItem('job-details', JSON.stringify(searchObject));
        console.log(id);
    }
    console.log();
    return (
        <div>
            <h2>This is applied jobs{}</h2>
        </div>
    );
};

export default AppliedJobs;