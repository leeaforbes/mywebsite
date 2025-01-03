import React from 'react';
import '../css/Projects.css';
import ProjectTile from '../modules/ProjectTile.js';
import projectList from '../data/projectdata'

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