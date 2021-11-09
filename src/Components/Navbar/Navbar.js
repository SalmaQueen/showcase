import React, { Component } from 'react'
import './navbar.css'
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-display  fixed-top">
            <div className="container-fluid ">
              <a className="navbar-brand text-white " href="#aboutme" style={{ fontSize:"1.5rem"}}>Portfolio</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <a className="nav-link active text-white" aria-current="page" href="#aboutme" style={{ fontSize:"1.5rem"}}>About me</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active text-white" href="#skills" style={{ fontSize:"1.5rem"}}>Skills</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active text-white" href="#design" style={{ fontSize:"1.5rem"}}>Design</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active text-white" href="#projects" style={{ fontSize:"1.5rem"}}>Projects</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active text-white" href="#contacts" style={{ fontSize:"1.5rem"}}>Contacts</a>
                  </li>
                  
                  
                </ul>
              </div>
            </div>
          
          
          </nav>
        )
    }
}
