import './App.css';
import Intro from './Intro'
import Projects from './Projects';
import SkillsDirectory from './SkillsDirectory';

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
      </div>
    </div>
  );
}

export default App;
