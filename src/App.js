import "./App.css";
import Bio from "./Bio";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Menu from "./Menu";
import Skills from "./Skills";

function App() {
  return (
    <div className='snap-y overflow-x-hidden'>
      <Menu />
      <Bio />
      <Experiences />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
