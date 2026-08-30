import { Navbar } from "./components/Navbar";
import { CustomCursor } from "./components/CustomCursor";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Work } from "./sections/Work";
import { Experience } from "./sections/Experience";
import { Metrics } from "./sections/Metrics";
import { Skills } from "./sections/Skills";
import { Brands } from "./sections/Brands";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-[var(--color-ink)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--color-bg)]"
      >
        Skip to content
      </a>
      <CustomCursor />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Experience />
        <Metrics />
        <Skills />
        <Brands />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
