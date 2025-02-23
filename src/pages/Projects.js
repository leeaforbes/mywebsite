import React from 'react';
import '../css/Projects.css';
import ProjectTile from '../components/ProjectTile.js';
import projectList from '../data/projectdata'
import { SoundContext } from '../contexts/SoundContext'
import { useState } from 'react';

const Projects = () => {
	const [sounds, setSounds] = useState(false);

	return (
		<>
			<div className='flexrow'>
				<div className='projecttitle'>
					Personal Projects
				</div>

				<div className='flexrow left'>
					<div className='center'>
						Sound
					</div>
					<label className='switch'>
						<input type='checkbox' onClick={() => { setSounds(!sounds) }} />
						<span className="slider"></span>
					</label>
				</div>
			</div>

			<SoundContext.Provider value={sounds}>
				<div className="projects">
					{projectList.map(p => (
						<ProjectTile key={p.name} project={p} />
					))}
				</div>
			</SoundContext.Provider>
		</>
	)
};

export default Projects;