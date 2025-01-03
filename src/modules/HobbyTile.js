import '../css/HobbyTile.css';

const HobbyTile = ({emoji, title}) => {
	return (
	  <div className="hobbytile">
			<div className='hobbytitle'>
				{emoji} {title}
			</div>
		</div>
	)
}

export default HobbyTile;