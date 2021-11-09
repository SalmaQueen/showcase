import React, { Component } from 'react'
import './content.css'

export default class Content3 extends Component {
    render() {
        return (
            <div className="card">
                   <div className="img-container">
                   <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>

                   </div>
            <h2>Doctor's APP</h2>
            <p>This is an application that can help in analysing and checking the symptoms of individuals before even meeting a doctor.
                Also a person can book an apointment with the doctor through the app.
           <a href="https://www.figma.com/file/r0iU91YATorOnu9WC5iWo4/doctor's-app">Check on Figma</a></p>
            
            </div>
          
        )
    }
}
