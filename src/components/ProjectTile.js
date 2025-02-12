import '../css/ProjectTile.css';
import SkillTile from '../components/SkillTile';
import useSound from 'use-sound'
import mySound from '../sounds/hint.wav'
import { useContext } from 'react';
import { SoundContext } from '../contexts/SoundContext';

const ProjectTile = ({project}) => {
  const [playSound] = useSound(mySound, { volume: 0.05 })
  const sounds = useContext(SoundContext);

  function onMouseEnter() {
    if(sounds === true){
      playSound()
    }
  }

  function onClick() {
    // window.location.href=project.link;
    if(sounds === true){
      playSound()
    }
    window.open(project.link, '_blank').focus();
  }

	return (
		<div className="projecttile"
    onClick={onClick}
    onMouseEnter={onMouseEnter}
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