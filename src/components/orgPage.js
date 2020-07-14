import React from 'react'
import './App.css'
import 'bulma/css/bulma.css'
import './sass/mystyles.scss'

export default function OrgPage () {

  return (
    <div>
      <header className='has-background-primary'>
        <h1 className="title">
            Organization Page
        </h1>
      </header>
      <body>
        <section className="textarea has-text-centered">

          Here you are, in the organization landing page.

        </section>
        <section className="section">
          <div className="columns">
            <div className="column">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title is-centered">
                    Pine Street Inn
                  </p>
                </header>
                <div className="card-content">
                  <div className="content">
                    View the Pine Street Inn's Page
                  </div>
                </div>
                <footer className="card-footer">
                  <a className="card-footer-item" href='/pineStreet'> Learn More </a>
                </footer>

              </div>
            </div>
            <div className="column">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title is-centered">
                    Pine Street Inn
                  </p>
                </header>
                <div className="card-content">
                  <div className="content">
                    View the Pine Street Inn's Page
                  </div>
                </div>
                <footer className="card-footer">
                  <a className="card-footer-item" href='/pineStreet'> Learn More </a>
                </footer>

              </div>
            </div>
            <div className="column">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title is-centered">
                    Add
                  </p>
                </header>
                <div className="card-content">
                  <div className="content">
                    View the Pine Street Inn's Page
                  </div>
                </div>
                <footer className="card-footer">
                  <a className="card-footer-item" href='/pineStreet'> Learn More </a>
                </footer>

              </div>
            </div>
            <div className="column">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title is-centered">
                    More
                  </p>
                </header>
                <div className="card-content">
                  <div className="content">
                    View the Pine Street Inn's Page
                  </div>
                </div>
                <footer className="card-footer">
                  <a className="card-footer-item" href='/pineStreet'> Learn More </a>
                </footer>

              </div>
            </div>
            <div className="column">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title is-centered">
                    Orgs
                  </p>
                </header>
                <div className="card-content">
                  <div className="content">
                    View the Pine Street Inn's Page
                  </div>
                </div>
                <footer className="card-footer">
                  <a className="card-footer-item" href='/pineStreet'> Learn More </a>
                </footer>

              </div>
            </div>

          </div>
        </section>
      </body>

    </div>

  )
}
