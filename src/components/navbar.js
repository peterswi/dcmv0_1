import React, {Component} from 'react';

import logo from './logo.png'
import 'bulma/css/bulma.css'
import './sass/mystyles.scss'


class NavBar extends Component{

  render () {
    return(
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://givecard.io">
            <img src={logo} width="112" height="28"  alt="Logo"/>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
        {
          this.props.authenticated
          ?(
            <div className="navbar-start">
                <a className="navbar-item" href='/'>
                  Home
                </a>

                <a className="navbar-item" href='/resources'>
                  Resources
                </a>
                <a className="navbar-item" href='/organizations'>
                  Organizations
                </a>

                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">
                    More
                  </a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item" href="/about">
                      About
                    </a>
                    <a className="navbar-item" href="/contact">
                      Contact GiveCard
                    </a>
                    <hr className="navbar-divider"/>
                    <a className="navbar-item" href='/issue'>
                      Report an issue
                    </a>
                  </div>
                </div>
              <div className="navbar-item">
                <div className="field has-addons">
                  <p className="control">
                    <input className="input" type="text" placeholder="Get Help ..."/>
                  </p>
                  <p className="control">
                    <button className="button">
                      Search
                    </button>
                  </p>
                </div>
              </div>
              </div>

            )
            : null
        }
          <div className="navbar-end">
            <div className="navbar-item">
              {
                this.props.authenticated
                ?(
                    <div className="buttons">
                      <a className="button is-primary " href="/profile">
                        <strong>Profile</strong>
                      </a>
                      <a className="button is-primary" href="/logout">
                        Log Out
                      </a>

                    </div>
                  )
                  :(
                    <div className="buttons">
                      <a className="button" href="/login">
                        <strong>Log In</strong>
                      </a>
                    </div>
                  )
              }

            </div>
          </div>
        </div>
      </nav>

    )
  }
}

export default NavBar