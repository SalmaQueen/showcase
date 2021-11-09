import React, { Component } from 'react'
import salma from './salma.png'
import './skills.css'

export default class Skills extends Component {
    render() {
        return (
            <div className="skills " id="skills"  data-aos="fade-up" data-aos-offset="200">

            <div className="sects row">
               <div className="box1 col-sm-12">
                 <img className="img-s" src={salma} alt=""/>
                 
                 <h4>Who's Salma?</h4>
                 <p>I'm a software Developer from Nairobi, Kenya.
            I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences with Reactjs(speciality for now).</p>
            </div>
              
               <div className="box2 text-center col-sm-12 " >
                   <h1 className="h1-skills">Software Developer</h1>
            
            <div className="row p-2  ">
            
            <div className=" edit-btn pr-3 col-md-4" >Js/Reactjs</div>
            <div className=" edit-btn pr-3 col-md-4" >html/CSS</div>
            
            <div className="edit-btn col-md-4" >SVG anime</div>
            </div>
            <div className="row p-2  ">
            
            <div className=" edit-btn pr-3 col-md-4" >Figma</div>
            <div className=" edit-btn pr-3 col-md-4" >Adobe XD/illustrator</div>
            
            <div className="edit-btn col-md-4" >Wordpress</div>
            </div>
            <hr style={{border:"2px solid white"}}/>
            <h1  className="h1-skills">Back-end Development SKills</h1>
            
            <div className="row  ">
            
            <div className=" edit-btn pr-3 col-md-4" >ruby-on-rails</div>
            <div className=" edit-btn pr-3 col-md-4" >Python/flask</div>
            
            <div className="edit-btn col-md-4" >Databases</div>
            </div>
            
            
                 
               
            </div>
            
            </div>
            
            </div>
        )
    }
}
