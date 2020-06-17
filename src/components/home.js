import React from 'react'
import logo from './logo.png'
import './App.css'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const home = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1> GiveCard Presents: GiveHelp</h1>
        <h2> A tool for Case Management</h2>
        <p />
      </header>
      <body>
        <p>
          <h2><b> Click a link to visit our different pages</b></h2>
        </p>
        <Button variant='contained' color='white' href='/orgPage'> Visit an Organization Page</Button>
        <br /> <br />
        <Button variant='contained' color='white' href='/registerUser'> Add a new User</Button>

      </body>
      <br /><br />
      <footer className='App-footer'>
        <a
          className='App-link'
          href='https://www.givecard.io/'
          target='_blank'
          rel='noopener noreferrer'
        >
                        Visit GiveCard
        </a>
        <b> OR </b>
        <Link to='/contact'>Contact Us</Link>
        <br />
      </footer>

    </div>
  )
}
export default home
