import './ProjectTile.css';
import SkillTile from './SkillTile';

const ProjectTile = ({title, desc, pic, skills}) => {
  console.log(title, skills)
	return (
		<div className="projecttile">

      <img src={pic} id='image'/>

      <div id='projectdescription'>

        <div id='projecttitle'>
          {title}
        </div>
        
        <div id='projectsubtitle'>
          <ul className='d'>
            {desc.map(element => (
              <li className='graytext'>{element}</li>
            ))}
          </ul>
        </div>

      </div>

      <div id='lang'>
        <div id='skillslist'>
          {skills.map(skill => (
            <SkillTile key={title + skill.title} title={skill}/>
          ))}
        </div>
      </div>
		</div>
	)
};

export default ProjectTile;