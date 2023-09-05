import './SkillTile.css';
import skills from './skillsdata';

const SkillTile = ({title}) => {
  // console.log("skilltile", title)
	return (
		<div className="skilltile">
      <img src={skills[title].image} id='skillimage' alt={title + " picture"}/>

      <div className='langname'>
        {title}
      </div>
		</div>
	)
}

export default SkillTile;