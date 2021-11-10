import React,{useState} from 'react'
import Content1  from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'
import Content4 from './Content4'
import './design.css'
function Design() {

    const [active, setActive]=useState("First")
    return (
        <div className="cotext" id="design" data-aos="fade-up" data-aos-offset="100">
        <h1 className="text-center text-white pt-3" >Designs</h1>
        <div className="context-btn">
        <button className="btn" onClick={()=>setActive("First")}>First</button>
            <button className="btn" onClick={()=>setActive("Second")}>Second</button>
            <button className="btn" onClick={()=>setActive("Third")}>Third</button>
            <button className="btn" onClick={()=>setActive("Fourth")}>Fourth</button>


        </div>
       
            {active=== "First" && <Content1/>}
            {active=== "Second" && <Content2/>}

            {active=== "Third" && <Content3/>}

            {active=== "Fourth" && <Content4/>}




            
        </div>
    )
}

export default Design
