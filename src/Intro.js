import './Intro.css';
import Resume from "./Lee Forbes Resume.pdf"

const Intro = () => {
	return (
		<div className="intro">
			<div id='description'>
				<div id='titletext'>
					Lee Forbes
				</div>

				<div id='subtext'>
				I recently start working as a consultant at Sogeti after graduating from UT Austin with a BS in Computer Science. My hobbies are skateboarding, ultimate frisbee, Spikeball, and software projects. I have had the honor to work at Omni Flow Computers, Blackbaud, iD Tech, Vans, Cane's, Sogeti, and [your company can be here too].

				<br/>
				<br/>
				My full resume is <a href={Resume} download={"Lee Forbes Resume"}>here</a>.
				
				<br/>
				&emsp; &#128231; <a href="mailto: lee.a.forbes@gmail.com">lee.a.forbes@gmail.com</a>
				</div>
			</div>
		</div>
	)
}

export default Intro;