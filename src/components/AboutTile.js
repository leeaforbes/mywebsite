import '../css/AboutTile.css';

const AboutTile = ({title, subtitle, imgname}) => {
	return (
	  <div className="abouttile">
      <img src={require("../aboutpics/" + imgname)} className="aboutimage" alt={title + " picture"}/>

      <div className='textstack'>
        <div className='abouttitle'>
          {title}
        </div>

        <div className='aboutsubtitle'>
          {subtitle}
        </div>
      </div>
		</div>
	)
}

export default AboutTile;