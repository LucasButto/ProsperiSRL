import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import PhilosophySection from "./components/PhilosophySection/PhilosophySection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import TechnicalFrame from "./components/TechnicalFrame/TechnicalFrame";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <TechnicalFrame />
      <Header />
      <Hero />
      <ProjectsSection />
      <PhilosophySection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
