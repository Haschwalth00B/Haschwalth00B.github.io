import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import About from './components/About';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CommandPalette from './components/CommandPalette';
import CustomCursor from './components/CustomCursor';
import { siteData } from './data/siteData';

export default function App() {
  return (
    <>
      {/* SEO */}
      <title>{siteData.title}</title>
      <meta name="description" content={siteData.description} />

      <CustomCursor />
      <ScrollProgress />
      <CommandPalette />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Gallery />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
