import './Intro.css';
import Resume from "./Lee Forbes Resume.pdf"
import AboutTile from "./AboutTile";
import HobbyTile from "./HobbyTile";

const Intro = () => {
	return (
		<div className="intro">
			<div id='description'>
				<div id='titletext'>
					Lee Forbes
				</div>

				<div className='aboutlist'>
					<AboutTile key="UTCS Tile" title="University of Texas at Austin" subtitle="BS Computer Science 2023" imgname="utemblem.png"/>
					<AboutTile key="Sogeti Tile" title="Sogeti of Capgemini" subtitle="Associate Consultant" imgname="sogetilogo.png"/>
				</div>

				<br/>

				<div className='hobbieslist'>
					<HobbyTile key="sbhobby" emoji="&#x1f6f9;" title="Skateboarding"/>
					<HobbyTile key="frisbeehobby" emoji="&#129359;" title="Frisbee"/>
					<HobbyTile key="spikehobby" emoji="&#127952;" title="Spikeball"/>
					<HobbyTile key="codinghobby" emoji="&#x1f4bb;" title="Software Projects"/>
				</div>

				<div id='subtext'>
				{/* I recently start working as a consultant at Sogeti after graduating from UT Austin with a BS in Computer Science. My hobbies are skateboarding, ultimate frisbee, Spikeball, and software projects. I have had the honor to work at Omni Flow Computers, Blackbaud, iD Tech, Vans, Cane's, Sogeti, and [your company can be here too]. */}

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