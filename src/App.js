import './App.css';
import Bio from './Bio';
import Direction from './Direction';
import Experiences from './Experiences';
import Menu from './Menu';
import Skills from './Skills';

function App() {
  return (
    <div className='snap-y overflow-y-hidden'>
      <Menu />
      <Bio />
      <Experiences />
      <Skills />
    </div>
  );
}

export default App;
