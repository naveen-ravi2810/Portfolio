import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Project from "./Component/Project";  
import Skills from "./Component/Skills";
import Contact from "./Component/Contact";
import { useRef } from "react";
import Links from "./Component/Links";

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const project = useRef(null);
  const skills = useRef(null);
  const contact = useRef(null);

  const scroll_content = (elementRef) => {
    window.scrollTo({
      top : elementRef.current.offsetTop,
      behavior : "smooth"
    });
  }
  return (
    <div>
      <div className="h-screen fixed top-0 left-0 right-0">
        <div className={`h-1/2 bg-gradient-to-b from-pink-200`}>
        </div>
        <div className={`h-1/2 bg-gradient-to-t from-green-200`}>
        </div>
      </div>
      <div className="relative">
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