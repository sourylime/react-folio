
import React from 'react';
import Project from './Project';
import projectImage from './public/2BA884E4-510D-42F5-9CBF-6443B0D9BA54.jpeg';
import projectImage2 from './public/ss1.png';

const Portfolio = () => {
    return (
        <div>
            <h2 className='portfolio'>Portfolio</h2>
            <Project title="ReelRendeView" description="Project using api calls to show multiple sources of data" image={projectImage} /><h3><a href="https://floconno.github.io/reel-rendezview/" target='_blank' rel='noopener noreferrer'>ReelRendezView Deployment</a></h3>
            <Project title="Slinky World" description="A social network for slinky enthusiasts" image={projectImage2} /><h3><a href="https://slinkyworld-4cca5764620e.herokuapp.com/" target='_blank' rel='noopener noreferrer'>Slinky World Deployment</a></h3>
            {/* Add more Project components as needed */}
        </div>
    );
};

export default Portfolio;
