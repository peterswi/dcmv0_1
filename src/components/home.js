import React from 'react'
import logo from './GIVECARD  logo.png'

import 'bulma/css/bulma.css'
import './sass/mystyles.scss'


// NOTES: Need to figure out coloring and the classnames for the full page and the header

export default function Home () {
  // this classes thing broke somehow-- need to correct that later on.
  // const classes = mystyles()

  return (
    <div className='has-text-centered'>

      <header className='heading is-family-secondary'>
        <img src={logo} width="224" height="100" alt="App Logo" />
        <h1 className="title"> GiveCard Presents: GiveHelp</h1>
        <h2 className="subtitle"> A tool for Case Management</h2>
        <p />
      </header>


      <body>
      <section className="section">
        <div className="container">
          <h2 className="title"><b> Click a link to visit our different pages</b></h2>
          <div className="columns">
            <div className="column">
              <a className="button is-hoverable is-primary" href='/organizations'> Visit an Organization Page</a>
            </div>
            <div className="column">
              <a className='button is-hoverable is-primary'  href='/resources'> View All Resources</a></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="columns">
          <div className="column">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title is-centered">
                  COVID-19
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  Find information about resources for Coronavirus relief.
                </div>
              </div>
              <footer className="card-footer">
                <a className="card-footer-item" href='/resources/covid'> Learn More </a>
              </footer>
            
            </div>
          </div>
          <div className="column">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title is-centered">
                  Housing
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  See resources available related to housing.
                </div>
              </div>
              <footer className="card-footer">
                <a className="card-footer-item" href='/resources/housing'> Learn More </a>
              </footer>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title is-centered">
                  Food
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  Get connected to food-related resources.
                </div>
              </div>
              <footer className="card-footer">
                <a className="card-footer-item" href='/resources/food'> Learn More </a>
              </footer>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title is-centered">
                  Jobs
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  Find resources relating to employment and the job search.
                </div>
              </div>
              <footer className="card-footer">
                <a className="card-footer-item" href='/resources/job'> Learn More </a>
              </footer>
            </div>
          </div>
        </div>
      </section>

      </body>



    </div>
  )
}
// export default home
