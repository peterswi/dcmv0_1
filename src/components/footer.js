import React, {Component} from 'react'

import 'bulma/css/bulma.css'
import './sass/mystyles.scss'
import { Link } from 'react-router-dom'

export default function Footer (){
  return(
    <footer className='footer has-background-primary'>
      <div className="content has-text-centered">
        <a
          className='is-link'
          href='https://www.givecard.io/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Visit GiveCard
        </a>
        <b> OR </b>
        <Link to='/contact'>Contact Us</Link>

      </div>
    </footer>
  )
}