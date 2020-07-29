import React, { Component } from 'react'
import '../App.css'

import 'bulma/css/bulma.css'
import './../sass/mystyles.scss'

/*
import { Link, Route } from 'react-router-dom'
import Covid from './resources/covid'
import Food from './resources/food'
import Housing from './resources/housing'
import Job from './resources/job'
*/

class Resources extends Component {
  /*
  constructor () {
    super();
  }

   */
//solution might just be having the landing page be dif than route page?
  render () {

    return (
      <div>



        <header className='is-primary has-text-centered'>
          <h1 className="title">Resource Page</h1>
          <p className="subtitle">Click one of the resource cards for more help</p>
        </header>

        <body>
        <section className="textarea has-text-centered">

          Here is some content for the resource landing page.

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

          <div className="columns">
            <div className="column">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title is-centered">
                    ADD
                  </p>
                </header>
                <div className="card-content">
                  <div className="content">
                    Find information about resources for Coronavirus relief.
                  </div>
                </div>
                <footer className="card-footer">
                  <a className="card-footer-item" href='/covid'> Learn More </a>
                </footer>

              </div>
            </div>
            <div className="column">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title is-centered">
                    MORE
                  </p>
                </header>
                <div className="card-content">
                  <div className="content">
                    See resources available related to housing.
                  </div>
                </div>
                <footer className="card-footer">
                  <a className="card-footer-item" href='/housing'> Learn More </a>
                </footer>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title is-centered">
                    RESOURCES
                  </p>
                </header>
                <div className="card-content">
                  <div className="content">
                    Get connected to food-related resources.
                  </div>
                </div>
                <footer className="card-footer">
                  <a className="card-footer-item" href='/food'> Learn More </a>
                </footer>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title is-centered">
                    HERE
                  </p>
                </header>
                <div className="card-content">
                  <div className="content">
                    Find resources relating to employment and the job search.
                  </div>
                </div>
                <footer className="card-footer">
                  <a className="card-footer-item" href='/job'> Learn More </a>
                </footer>
              </div>
            </div>
          </div>
        </section>


        </body>

      </div>
    )
  }
}
export default Resources
