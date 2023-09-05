import "./SkillsDirectory.css"
import SkillTile from "./SkillTile";
import skills from "./skillsdata";

function SkillsDirectory() {

	var keys = Object.keys(skills)
	// shuffleArray(keys)

	return (
		<div>
			<div className='title'>
					Skills
			</div>
			<div className='skillsdirectory'>
					{keys.map(skill => (
						<SkillTile key={skill + "directory"} title={skill}/>
					))}
			</div>
		</div>
	);
}

// thank you stack overflow <3
/* Randomize array in-place using Durstenfeld shuffle algorithm */
// function shuffleArray(array) {
// 	for (var i = array.length - 1; i > 0; i--) {
// 			var j = Math.floor(Math.random() * (i + 1));
// 			var temp = array[i];
// 			array[i] = array[j];
// 			array[j] = temp;
// 	}
// }

export default SkillsDirectory;
