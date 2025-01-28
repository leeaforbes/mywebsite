import '../css/ProjectTile.css';
import SkillTile from '../modules/SkillTile';

const ProjectTile = ({project}) => {
	return (
		<div className="projecttile"
    onClick={() => {
      // window.location.href=project.link;
      window.open(project.link, '_blank').focus();
    }}
    >
      <img src={project.pic} className='image' alt={project.name + " picture"}/>

      <div className='projectdescription'>
        <div className='projecttitle'>
          <a key={project.name + "link"} href={project.link}>
            {project.name}
          </a>
        </div>
        
        <div className='projectsubtitle'>
          <ul key={project.name + project.desc + "table"} className='d'>
            {project.desc.map(element => (
              <li key={element} className='graytext'>{element}</li>
            ))}
          </ul>
        </div>

      </div>

      <div className='lang'>
        <div className='skillslist'>
          {project.skills.map(skill => (
            <SkillTile key={project.name + skill} title={skill}/>
          ))}
        </div>
      </div>
		</div>
	)
};

export default ProjectTile;