import React, { Component } from 'react'

import 'bulma/css/bulma.css'
import '../sass/mystyles.scss'


class OrgPage extends Component {
  /*
  constructor (props) {
    super(props);
  }

   */

  render () {

    return (
      <div>

        <header className='has-text-centered'>
          <h2 className="title">
            <b>Organization Page</b>
          </h2>
        </header>
        <body>
        <section className="section has-text-centered">

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
                  <a className="card-footer-item" href='/organizations/pinestreet'> Learn More </a>
                </footer>

              </div>
            </div>
            <div className="column">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title is-centered">
                    City Mission Boston
                  </p>
                </header>
                <div className="card-content">
                  <div className="content">
                    View City Mission's Page
                  </div>
                </div>
                <footer className="card-footer">
                  <a className="card-footer-item" href='/organizations/citymission'> Learn More </a>
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
                    [fill in orgs]
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
                    [fill in orgs]
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
                    [fill in orgs]
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
}
export default OrgPage
