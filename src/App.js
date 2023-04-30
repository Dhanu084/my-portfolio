import { useEffect, useState } from "react";
import "./App.css";
import Bio from "./Bio";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Menu from "./Menu";
import Skills from "./Skills";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.classList.toggle("dark");
    }
  }, [theme]);
  return (
    <div
      className={` bg-white dark:bg-black text-black dark:text-white snap-y overflow-x-hidden`}
    >
      <Menu theme={theme} setTheme={setTheme} />
      <Bio />
      <Experiences />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
