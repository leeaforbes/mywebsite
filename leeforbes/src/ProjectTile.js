import './ProjectTile.css';
import SkillTile from './SkillTile';

const ProjectTile = ({project}) => {
	return (
		<div className="projecttile"
    >
      <img src={project.pic} id='image'/>

      <div id='projectdescription'>

        <div id='projecttitle'>
          <a key={project.name + "link"} href={project.link}>
            {project.name}
          </a>
        </div>
        
        <div id='projectsubtitle'>
          <ul key={project.name + project.desc + "table"} className='d'>
            {project.desc.map(element => (
              <li key={element} className='graytext'>{element}</li>
            ))}
          </ul>
        </div>

      </div>

      <div id='lang'>
        <div id='skillslist'>
          {project.skills.map(skill => (
            <SkillTile key={project.name + skill} title={skill}/>
          ))}
        </div>
      </div>
		</div>
	)
};

export default ProjectTile;