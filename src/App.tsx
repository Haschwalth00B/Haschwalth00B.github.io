import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
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
        <div className="divider max-w-2xl mx-auto" />
        <Skills />
        <div className="divider max-w-2xl mx-auto" />
        <Projects />
        <div className="divider max-w-2xl mx-auto" />
        <Experience />
        <div className="divider max-w-2xl mx-auto" />
        <Education />
        <div className="divider max-w-2xl mx-auto" />
        <Blog />
        <div className="divider max-w-2xl mx-auto" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
