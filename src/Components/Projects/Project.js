import React, { Component } from 'react'
import './project.css'
import Contact from '../Contact/Contact'

export default class Project extends Component {
    render() {
        return (
            <>
            <div className="projects-container" id="projects" data-aos="fade-up" data-aos-offset="200">
<div className="wrapper row">
<h1 className="text-center text-white  h1-skills" >Projects</h1>


    <div className="col-md-4">
    <div class="feature-card" style={{background:`url("https://images.pexels.com/photos/7234390/pexels-photo-7234390.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`}}>
    <div class="feature-card-tilte">
        <h3>
            Boston Movie Festival
        </h3>
    </div>
    <div class="feature-card-deatails">
        <i class="fa fa-bank"></i>
        <h4>Boston Movie Festival</h4>
        <p>Developed with bootstrap </p>
        <a href="https://boston-project.netlify.app/">view site</a>
    </div>
</div>

    </div>

    <div className="col-md-4">
    <div class="feature-card" style={{background:`url("https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`}}>
    <div class="feature-card-tilte">
        <h3>
        One power App
        </h3>
    </div>
    <div class="feature-card-deatails">
        <i class="fa fa-bank"></i>
        <h4>One power App</h4>
        <p>Developed with ruby-on-rails and reactjs </p>
        <a href="https://wizardly-swartz-e8c97f.netlify.app/">view site</a>
    </div>
</div>

    </div>

    <div className="col-md-4">
    <div class="feature-card"  style={{background:`url("https://images.pexels.com/photos/6303604/pexels-photo-6303604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`}}>
    <div class="feature-card-tilte">
        <h3>
            Cancer solution App
        </h3>
    </div>
    <div class="feature-card-deatails">
        <i class="fa fa-bank"></i>
        <h4>Cancer solution App</h4>
        <p>Developed with python/flask and html/css </p>
        <a href="https://cancer-solutions.herokuapp.com/">view site</a>
    </div>
</div>

    </div>


</div>

{/* repeat*/}

<div className="wrapper row">


    <div className="col-md-4">
    <div class="feature-card" style={{background:`url("https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`}}>
    <div class="feature-card-tilte">
        <h3>
            kids Shopping 
        </h3>
    </div>
    <div class="feature-card-deatails">
        <i class="fa fa-bank"></i>
        <h4>kids Shopping  App</h4>
        <p>Contributed to the front-end </p>
        <a href="https://www.purpink.co.ke/">view site</a>
    </div>
</div>

    </div>

    <div className="col-md-4">
    <div class="feature-card" style={{background:`url("https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`}}>
    <div class="feature-card-tilte">
        <h3>
            cavier and chalets
        </h3>
    </div>
    <div class="feature-card-deatails">
        <i class="fa fa-bank"></i>
        <h4>cavier and chalets App</h4>
        <p>Developed with wordpress </p>
        <a href="https://dev-reallestate.pantheonsite.io/">view site</a>
    </div>
</div>

    </div>

    <div className="col-md-4">
    <div class="feature-card"  style={{background:`url("https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`}}>
    <div class="feature-card-tilte">
        <h3>
            Monalisa Shop
        </h3>
    </div>
    <div class="feature-card-deatails">
        <i class="fa fa-bank"></i>
        <h4>Monalisa Shop</h4>
        <p>Developed with semantic-ui and react-redux </p>
        <a href="https://monalisa-ke.netlify.app/">view site</a>
    </div>
</div>

    </div>


 


</div>

</div>
{/* <Contact/> */}
</>
        )
    }
}
