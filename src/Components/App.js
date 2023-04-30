import { useEffect, useState } from "react";
import Bio from "./Bio";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Menu from "./Menu";
import Skills from "./Skills";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      theme === "light"
        ? html.classList.remove("dark")
        : html.classList.add("dark");
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
