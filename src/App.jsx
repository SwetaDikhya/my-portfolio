import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold">Hello, I'm building my portfolio.</h1>
      </main>
    </div>
  )
}

export default App