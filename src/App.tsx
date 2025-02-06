import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import { timelineData } from "./data/TimelineData";

// about, education? work exp, projects, skill, about;
// navbar, header , sections, footer

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <Skills />
            <Timeline items={timelineData} />
            <Projects />
            <Footer />
        </>
    );
}

export default App;
