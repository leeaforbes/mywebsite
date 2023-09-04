import './Projects.css';
import ProjectTile from './ProjectTile.js';
import projectList from './projectdata'

const Projects = () => {

    const projects = ["Pedali", "UT Skate Spots", "Photo Viewer Reborn"]

    // console.log(projectList[0].name)
    // console.log(projectList.length)
    // projectList.map(e => {
    //     console.log(e.name)
    // })

	return (
		<div className="projects">
            {projectList.map(p => (
                <ProjectTile key={p.name} title={p.name} desc={p.desc} pic={p.pic} skills={p.skills}/>
            ))}
		</div>
	)
};

export default Projects;