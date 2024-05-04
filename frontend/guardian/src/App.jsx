import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Logo from "./components/logo/Logo";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Logo/>
      </section>
      <section id="Services"> 
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Projects">
        <Parallax type="Projects"/>
      </section>
      <Projects />
      <section id="Contact">
        <Contact />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
