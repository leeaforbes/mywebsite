import './SkillTile.css';
import skills from './skillsdata';

const SkillTile = ({title}) => {
  // console.log("skilltile", title)
	return (
		<div className="skilltile">
      <img src={skills[title].image} id='skillimage'/>

      <div className='langname'>
        {title}
      </div>
		</div>
	)
}

export default SkillTile;