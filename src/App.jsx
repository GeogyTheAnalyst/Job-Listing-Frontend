import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddJob from './components/AddJob';
import JobList from './components/JobLists';
import JobDetail from './components/JobDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/site" exact element={<Home />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/jobs" exact element={<JobList />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

