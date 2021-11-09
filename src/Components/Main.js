import React from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'
import './style.css'    
import Navbar from './Navbar/Navbar'
import About from './About/About'
import Contact from './Contact/Contact'
import Skills from './Skills/Skills'
import Project from './Projects/Project'
import Design from './Designs/Design'
// import { Link } from 'react-router-dom'

const Main=()=> {
    Aos.init({
        duration:1000
    })
    return (
        <>
       <Navbar/>
       <About />
        <Skills/>
        <Design/>
        <Project/>

        <Contact/>





            
        </>
    )
}

export default  Main;