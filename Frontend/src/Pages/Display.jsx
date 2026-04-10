import { Contact } from "lucide-react";
import Experience from "../Components/Experience";
import Hero from "../Components/Hero";
import Projects from "../Components/Project";
import Skills from "../Components/Skills";
import { ContactUs } from "../Components/ContactUs";
import About from "../Components/About";

const Display = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Experience/>
    <Skills/>
    <Projects/>
    <ContactUs/>
    </>
  )
}

export default Display