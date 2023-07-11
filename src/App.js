import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Project from "./Component/Project";  
import Skills from "./Component/Skills";
import Contact from "./Component/Contact";
import { useRef, useState } from "react";
import Links from "./Component/Links";
import Colorchooser from "./Component/Colorchooser";

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const project = useRef(null);
  const skills = useRef(null);
  const contact = useRef(null);

  const [TopColor, setTopColor] = useState('[#8A2424]/[0.26]');
  const [BottomColor, setBottomColor] = useState('[#8F991B]/[0.32]');

  const scroll_content = (elementRef) => {
    window.scrollTo({
      top : elementRef.current.offsetTop,
      behavior : "smooth"
    });
  }
  return (
    <div>
      <div className="h-screen fixed top-0 left-0 right-0">
        <div className={`h-1/2 bg-gradient-to-b from-[#8A2424]/[0.26] `}>
        </div>
        <div className={`h-1/2 bg-gradient-to-t from-[#8F991B]/[0.32]`}>
        </div>
      </div>
      <div className="relative">
        <Colorchooser setTopColor={setTopColor} setBottomColor={setBottomColor}/>
        <Navbar scroll_content={scroll_content} home={home} about={about} project={project} skills={skills} contact={contact}/>
        <Home homeref={home}/>
        <h1 className="md:flex hidden justify-center text-3xl font-quotes ">---Mistakes are the lessons that teach you to rectify Errors---</h1>
        <About aboutref={about}/>
        <h1 className="md:flex hidden justify-center text-3xl font-quotes ">---Target your goals and then work on it---</h1>
        <Project projectref={project}/>
        <Skills skillsref={skills}/>
        <Contact contactref={contact}/>
        <Links/>
      </div>
    </div>
  );
}

export default App;