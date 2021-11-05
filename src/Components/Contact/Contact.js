import React, { Component } from 'react'
import './contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div className="contacts" id="contacts" >
<h1 className="text-center text-white "style={{borderRadius:"20px", fontSize:"2.5rem"}}>Follow me on</h1>

<footer className=" bg-light " style={{boxShadow:"4px 8px rgba(0,0,0,0.4)"}}>

<ol>
<li>
    <a href="https://www.facebook.com/SalmaMohamedKenyan/ ">
        <i className="fab fa-facebook-f ">
                        </i>
    </a>
</li>
<li>
    <a href="https://twitter.com/SalmaKe_mohamed ">
        <i className="fab fa-twitter ">
                    </i>
    </a>
</li>
<li>
    <a href="https://www.instagram.com/salma_mohamed_Ke/"><i className="fab fa-instagram "></i></a>
</li>
<li>
    <a href="https://www.linkedin.com/in/salma-mohamed-kenyan/ "><i className="fab fa-linkedin-in "></i></a>
</li>
</ol>
<hr/>

</footer>
</div>
        )
    }
}
