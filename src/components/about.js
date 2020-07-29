import React, { Component } from 'react'
import logo from './logo.png'

import 'bulma/css/bulma.css'
import './sass/mystyles.scss'

class About extends Component{

  render () {
    return(
      <div className="section">
        <header className="heading">
          <a className="navbar-item" href="https://givecard.io">
            <img src={logo}width="112" height="28" alt="Logo"/>
          </a>
          <h2 className="title">
            About GiveHelp
          </h2>
        </header>
        <body className='container'>
        This is about
        </body>
      </div>
    )
  }

}
export default About