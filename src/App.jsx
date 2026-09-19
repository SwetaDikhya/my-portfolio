import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-slate-900 dark:text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  );
}

export default App;
