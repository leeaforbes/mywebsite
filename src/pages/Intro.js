import '../css/Intro.css';
import Resume from "../files/Lee Forbes Resume.pdf"
import AboutTile from "../modules/AboutTile";
import HobbyTile from "../modules/HobbyTile";

const Intro = () => {
	return (
		<div>
			<div className='description'>
				<div className='titletext'>
					Lee Forbes
				</div>

				<div className='aboutlist'>
					<AboutTile key="Sogeti Tile" title="Sogeti of Capgemini" subtitle="Associate Consultant" imgname="sogetilogo.png"/>
					<AboutTile key="UTCS Tile" title="University of Texas at Austin" subtitle="BS Computer Science 2023" imgname="utemblem.png"/>
				</div>

				<br/>

				<div className='hobbieslist'>
					<HobbyTile key="codinghobby" emoji="&#x1f4bb;" title="Software Projects"/>
					<HobbyTile key="sbhobby" emoji="&#x1f6f9;" title="Skateboarding"/>
					<HobbyTile key="frisbeehobby" emoji="&#129359;" title="Frisbee"/>
					<HobbyTile key="spikehobby" emoji="&#127952;" title="Spikeball"/>
					<HobbyTile key="picklehobby" emoji="&#129362;" title="Pickleball"/>
				</div>

				<div className='subtext'>
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