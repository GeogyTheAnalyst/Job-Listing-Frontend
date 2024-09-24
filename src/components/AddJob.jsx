import React, { useState } from 'react';
import axiosInstance from './axiosInstance';

const AddJob = () => {
  const [job, setJob] = useState({ id: '', title: '', description: '' });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance.post('/jobs', job)
      .then(response => {
        alert('Job added successfully!');
        setJob({ id: '', title: '', description: '' });
      })
      .catch(error => {
        console.error('There was an error adding the job!', error);
      });
  };

  return (
    <div className="container mx-auto p-20">
      <h1 className="text-2xl font-bold mb-4 "><marquee><i>WellCome To Our Site , Please Add a New Job</i></marquee></h1>
      <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in-down">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
            ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="id"
            type="text"
            name="id"
            value={job.id}
            onChange={handleChange}
            placeholder="ID"
          />
        </div>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            name="title"
            value={job.title}
            onChange={handleChange}
            placeholder="Title"
          />
        </div>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            value={job.description}
            onChange={handleChange}
            placeholder="Description"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
