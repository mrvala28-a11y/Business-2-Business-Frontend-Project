import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Process from './components/Process'
import Designs from './components/Designs'
import Benefits from './components/Benefits'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg-primary overflow-hidden">
      {/* Animated background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-accent-purple/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent-magenta/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-cyan/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent-gold/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-3000"></div>
      </div>
      
      {/* Grid overlay */}
      <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Stats />
        <Process />
        <Designs />
        <Benefits />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default App
