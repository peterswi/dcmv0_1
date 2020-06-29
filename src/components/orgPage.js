import React from 'react'
import logo from './logo.png'
import './App.css'
import OrgUser from './orgUser'

const orgPage = () => {
  return (
    <div className='App'>
      <img src={logo} alt='logo' />
      <header className='App-header'>
        <h1>
                Organization Page
        </h1>
      </header>

      <body>
        <h3>
                Organization Page
        </h3>
      Admin Add Users Here:
      </body>
      <footer className='App-footer'>
                The End
      </footer>
    </div>
  )
}

export default orgPage
