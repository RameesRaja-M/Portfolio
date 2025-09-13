import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Sections/Hero'
import TechnicalProficeint from "./Sections/TechnicalProficeint"
import AboutMe from "./Sections/AboutMe"
import MyProjects from './Sections/MyProjects'
import ContactMe from './Sections/ContactMe'
import Footer from './Sections/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TechnicalProficeint/>
      <AboutMe/>
      <MyProjects/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App