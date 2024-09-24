import React, { useEffect, useState } from 'react';
import axios from 'axios';
import axiosInstance from './axiosInstance';

import { useParams } from 'react-router-dom';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/jobs/${id}`)
      .then(response => {
        setJob(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the job!', error);
      });
  }, [id]);

  return (
    <div>
      {job ? (
        <>
          <h1>{job.title}</h1>
          <p>{job.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default JobDetail;
