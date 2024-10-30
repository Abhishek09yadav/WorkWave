import React, { useEffect, useState } from 'react';
import SingleJobs from '../SingleJobs/SingleJobs';
import {data} from "autoprefixer";

const JobSection = ({ searchTerm }) => {
    const [jobs, setJobs] = useState([]);
    const [seeAll, setAll] = useState(false);

    useEffect(() => {
        fetch('/company.json')
            .then((res) => res.json())
            .then((data) => setJobs(data))
    }, []);
    console.log('job', jobs);
    const filteredJobs = jobs.filter((job) =>
        searchTerm ? job.job_title.toLowerCase().includes(searchTerm.toLowerCase()) : true
    );


    return (
        <div className='text-center my-6'>
            <h1 className='text-5xl custom-text p-4'>Featured Jobs</h1>
            <div className="grid md:grid-cols-2 gap-4 md:w-3/4 mx-auto">
                {
                    seeAll ? filteredJobs.map((job) => <SingleJobs key={job.id} job={job} />)
                        : filteredJobs.slice(0, 4).map((job) => <SingleJobs key={job.id} job={job} />)
                }
            </div>
            <button onClick={() => setAll(!seeAll)} className='custom-btn mt-6'>
                {seeAll ? 'Show Less' : 'Show All'}
            </button>
        </div>
    );
};

export default JobSection;
