import '../css/Intro.css';
import Resume from "../files/Lee Forbes Resume.pdf"
import AboutTile from "../components/AboutTile";
import HobbyTile from "../components/HobbyTile";

const Intro = () => {
	return (
		<div>
			<div className='description'>
				<div className='titletext'>
					Lee Forbes
				</div>

				<br/>

				<div className='aboutlist'>
					<AboutTile key="Sogeti Tile" title="Sogeti of Capgemini" subtitle="Associate Consultant" imgname="sogetilogo.png"/>
					<AboutTile key="UTCS Tile" title="University of Texas at Austin" subtitle="BS Computer Science 2023" imgname="utemblem.png"/>
				</div>

				<br/>

				<div className='hobbieslist'>
					<HobbyTile key="codinghobby" emoji="&#x1f4bb;" title="Software Projects"/>
					<HobbyTile key="frisbeehobby" emoji="&#129359;" title="Ultimate"/>
					<HobbyTile key="spikehobby" emoji="&#127952;" title="Spikeball"/>
					<HobbyTile key="sbhobby" emoji="&#x1f6f9;" title="Skateboarding"/>
					<HobbyTile key="picklehobby" emoji="&#129362;" title="Pickleball"/>
				</div>

				<br/>

				<div className='info'>
					<a href={Resume} download={"Lee Forbes Resume"}>
						<button className="resume">
							📄 Resume
						</button>
					</a>

					<a href="mailto: lee.a.forbes@gmail.com">
						<button className="email">
							📧 lee.a.forbes@gmail.com
						</button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Intro;