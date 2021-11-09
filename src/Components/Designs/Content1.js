import React, { Component } from 'react'
import './content.css'
export default class Content1 extends Component {
    render() {
        return (
           
                <div className="card">
                    <div className="img-container">

                    <img src="https://media.istockphoto.com/photos/deep-in-the-wild-woods-sunbeams-illuminating-green-forest-panorama-picture-id1292588329?b=1&k=20&m=1292588329&s=170667a&w=0&h=5DT_KIu2TPj7pLD6J2C41Lz3vCj8LcD2dLr79VAFDwE=" alt=""/>
                    </div>          
                <h2>Hack for Climate</h2>
                <p>
               This hackathon was held by SiT which stands for Somalis in Tech.
                Our team built a project called Somalia trees where someone can give back to the community by
                    buying a plant from our website where we later hire a local person to plant the tree.
               
                This solution is to curb the draught and flooding that Somalia experiences.<br/>
              <a href="https://www.figma.com/file/xYbgfNXULC4AnilPeNYDnR/somalia-trees">Check on Figma</a></p>
                
                </div>
              
        )
    }
}
