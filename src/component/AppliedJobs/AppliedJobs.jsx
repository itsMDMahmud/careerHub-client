import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const getData = useLoaderData();
    console.log(getData);
    return (
        <div>
            <h2>this is applied jobs</h2>
        </div>
    );
};

export default AppliedJobs;