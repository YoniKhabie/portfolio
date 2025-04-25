import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import ScrollTracker from "./components/ui/ScrollTracker";
import { timelineData } from "./data/TimelineData";

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <Skills />
            <Timeline items={timelineData} />
            <Projects />
            <Footer />
            <ScrollTracker />
        </>
    );
}

export default App;
