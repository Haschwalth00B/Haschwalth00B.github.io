import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CommandPalette from './components/CommandPalette';
import { siteData } from './data/siteData';

export default function App() {
  return (
    <>
      {/* SEO */}
      <title>{siteData.title}</title>
      <meta name="description" content={siteData.description} />

      <ScrollProgress />
      <CommandPalette />
      <Navbar />
      <main id="main-content">
        <Hero />
        <div className="divider container-main" />
        <About />
        <div className="divider container-main" />
        <Skills />
        <div className="divider container-main" />
        <Projects />
        <div className="divider container-main" />
        <Experience />
        <div className="divider container-main" />
        <Education />
        <div className="divider container-main" />
        <Gallery />
        <div className="divider container-main" />
        <Blog />
        <div className="divider container-main" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
