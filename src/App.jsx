import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProfileToggle from './components/ProfileToggle'
import Contact from './components/Contact'

function HomePage() {
  return (
    <>
      <Navbar />
      {/* relative z-[1] eleva el contenido sobre el canvas (z-index:0) */}
      <main className="relative z-[1]">
        <Hero />
        <ProfileToggle />
        <Contact />
      </main>
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </HashRouter>
  )
}
