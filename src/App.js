import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Project from './components/Project'
import Experience from './components/Experience'
// import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Project />
      <Experience />
      {/* <Contact /> */}
    </div>
  )
}

export default App