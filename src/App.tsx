import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F8F7F2] text-[#252923] selection:bg-[#D5F2A3] selection:text-[#174D38]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
