import React, { Component } from 'react'
import './content.css'

export default class Content2 extends Component {
    render() {
        return (
                <div className="card">
                     <div className="img-container">
                     <img src="https://media.istockphoto.com/photos/humpback-whale-playfully-swimming-in-clear-blue-ocean-picture-id1301667498?b=1&k=20&m=1301667498&s=170667a&w=0&h=4vBxtBbCc71tOOtE-5uYNew0xh8B_SSliPoXtmSdFIM=" alt=""/>

                     </div>
                <h2>Ocean Hackers</h2>
                <p>This was a hackathon that was held by Girls in Tech Australia,
                    and the main aim was to Hack for the Ocean. 

                    Our team took part in building a charity site that could help someone see on the map
                    the number of clean toilets that are around that area. Our main aim was to create an awareness on what to throw inside the toilets
                    and also what not. Generally you understand that the toilets are connected to the ocean.
             <br/>
              <a href="https://www.figma.com/file/uC8eauNejqGg7Z8d4kwmuV/OceanHackers">Check on Figma</a></p>
                
                </div>
     
        )
    }
}
