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
            <div className='title'>
                Personal Projects
            </div>
            <div className="projects">
                {projectList.map(p => (
                    <ProjectTile key={p.name + "project"} title={p.name} desc={p.desc} pic={p.pic} skills={p.skills}/>
                ))}
            </div>
        </>
	)
};

export default Projects;