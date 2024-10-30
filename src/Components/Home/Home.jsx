import React, { useState } from 'react';
import './Home.css'
import Header from '../Header/Header';
import JobSection from '../JobSection/JobSection';
import JobCategory from '../JobCategory/JobCategory';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import searchimg from '../../assets/All Images/searchimg.png'
const Home = () => {
    const category = useLoaderData();
    useTitle('Home');
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className='pt-10 px-10'>


            <Header/>

            <JobCategory category={category}/>
            <div className="search-container">
                <h2 className="search-label">Search:</h2>
                <img src={searchimg} alt="" className="small-img"/>
                <input
                    type="text"
                    placeholder="Search jobs by Job Title"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="styled-input"
                />
            </div>

            <JobSection searchTerm={searchTerm}/>
            <Footer/>
        </div>
    );
};

export default Home;
