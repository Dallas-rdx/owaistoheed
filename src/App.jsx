import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App flex flex-col min-h-screen">
            <Navbar />
            <div className="mainpage flex-1 relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[85rem]">
                <Hero />
                <AboutSection />
                <Experience />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
                <ToastContainer position="top-center" />
            </div>
            <Footer />
        </div>
    );
}

export default App;
