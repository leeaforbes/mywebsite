import './AboutTile.css';

const AboutTile = ({title, subtitle, imgname}) => {
	return (
	  <div className="abouttile">
      <img src={require("./aboutpics/" + imgname)} className="aboutimage" alt={title + " picture"}/>

      <div className='textstack'>
        <div className='title'>
          {title}
        </div>

        <div className='subtitle'>
          {subtitle}
        </div>
      </div>
		</div>
	)
}

export default AboutTile;