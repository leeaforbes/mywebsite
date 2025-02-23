import '../css/AboutTile.css';

const AboutTile = (props) => {
	return (
	  <div className="abouttile">
      <img src={require("../aboutpics/" + props.imgname)} className="aboutimage" alt={props.title + " picture"}/>

      <div className='textstack'>
        <div className='abouttitle'>
          {props.title}
        </div>

        <div className='aboutsubtitle'>
          {props.subtitle}
        </div>
      </div>
		</div>
	)
}

export default AboutTile;