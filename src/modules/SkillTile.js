import '../css/SkillTile.css';
import skills from '../data/skillsdata';

const SkillTile = ({title}) => {
  // console.log("skilltile", title)
	return (
		<div className="skilltile">
      <img src={skills[title].image} className='skillimage' alt={title + " picture"}/>

      <div className='langname'>
        {title}
      </div>
		</div>
	)
}

export default SkillTile;