import React, { useEffect, useState } from 'react';
import axios from 'axios';
import axiosInstance from './axiosInstance';
import { useNavigate } from 'react-router-dom';


const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.get('/jobs')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the jobs!', error);
      });
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <span onClick={() => navigate(`/jobs/${job.id}`)} style={{cursor: "pointer", color: "blue"}}>{job.title}</span> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
