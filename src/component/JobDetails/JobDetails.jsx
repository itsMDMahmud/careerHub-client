import React, { useEffect, useState } from "react";
import "./JobDetails.css";
import { Link, useParams } from "react-router-dom";
import { addToDb } from "../Utilities/fakedb";

const JobDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const [companyDetails, setCompanyDetails] = useState([]);
  useEffect(() => {
    fetch("/CompanyData.json")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setCompanyDetails(data);
        }
      });
  }, []);
  const companyData = companyDetails.find((job) => job.company.id == id);
  // console.log(companyData);

  const handleAddToDb = (id) => {
    console.log(id);
    addToDb(id);
  }
  
  return (
    <div className="job-details">
      {/* <h2>{companyData?.company?.company_name}</h2> */}
      <div className="job-details-left">
        <p className="job-d-compo"><h3 className="job-description compo-heading">Job Description: </h3>{companyData?.company?.job_description}</p>
        <p className="job-d-compo"><h3 className="job-description compo-heading">Job Responsibility: </h3>{companyData?.company?.job_responsibility}</p>
        <p className="job-d-compo"><h3 className="job-description compo-heading">Educational Requirement: </h3>{companyData?.company?.education_requirement}</p>
        <p className="job-d-compo"><h3 className="job-description compo-heading">Experience: </h3>{companyData?.company?.experience}</p>
      </div>

      {/* right side --------- */}

      <div className="job-details-right">
            <div className="job-details-right-main">
            <h3>Job Details</h3>
            <hr />            
            <div className="job-d-div">
              <span><img src="https://i.ibb.co/8g2dNLV/Frame.png" alt="" /></span>
              <span><h4>Salary: </h4></span>
              <p>{companyData?.company?.salary_range}</p>
            </div>
            <div className="job-d-div">
              <span><img src="https://i.ibb.co/k2YmKtg/Frame-1.png" alt="" /></span>
              <span><h4>Job Title: </h4></span>
              <p>{companyData?.company?.job_title}</p>
            </div>
            <h3>Contact Information</h3>
            <hr />
            <div className="job-d-div">
              <span><img src="https://i.ibb.co/jyyMQ8t/Frame-2.png" alt="" /></span>
              <span><h4>Phone: </h4></span>
              <p>{companyData?.company?.phone}</p>
            </div>
            <div className="job-d-div">
              <span><img src="https://i.ibb.co/VWQdgn1/Frame-3.png" alt="" /></span>
              <span><h4>Email: </h4></span>
              <p>info@gmail.com</p>
            </div>
            <div className="job-d-div">
              <span><img src="https://i.ibb.co/bFQXBW8/Frame-4.png" alt="" /></span>
              <span><h4>Address: </h4></span>
              <p>{companyData?.company?.location}</p>
            </div>
            </div>
            
            <button onClick={()=>handleAddToDb(companyData?.company?.id)} className="job-apply-now">Apply Now</button>
      </div>      
    </div>
  );
};

export default JobDetails;
