import React from 'react';
import './Projects.css';
import ProjectTile from './ProjectTile.js';
import projectList from './projectdata'

const Projects = () => {

    // console.log(projectList[0].name)
    // console.log(projectList.length)
    // projectList.map(e => {
    //     console.log(e.name)
    // })

	return (
        <>
            <div className='projecttitle'>
                Personal Projects
            </div>
            <div className="projects">
                {projectList.map(p => (
                    <ProjectTile key={p.name} project={p}/>
                ))}
            </div>
        </>
	)
};

export default Projects;