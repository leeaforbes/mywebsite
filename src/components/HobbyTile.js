import '../css/HobbyTile.css';

const HobbyTile = (props) => {
	return (
	  <div className="hobbytile">
			<div className='hobbytitle'>
				{props.emoji} {props.title}
			</div>
		</div>
	)
}

export default HobbyTile;