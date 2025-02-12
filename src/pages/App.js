import '../css/App.css';
import Intro from './Intro'
import Projects from './Projects';
import SkillsDirectory from './SkillsDirectory';
import SiteHistory from './SiteHistory';

function App() {
  return (
    <div className='background'>
      <div className='middlebackground'>
        <Intro/>
        <br/>
        <br/>
          <Projects/>
        <br/>
        <SkillsDirectory/>
        <br/>
        <SiteHistory/>
      </div>
    </div>
  );
}

export default App;