import React, { Component } from 'react'
import './App.css'
import { app } from '../firestore'
import { Route } from 'react-router-dom'
import ProfileUpdate from './profileUpdate'

import 'bulma/css/bulma.css'
import './sass/mystyles.scss'

class Profile extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const user = app.auth().currentUser
    const email = user.email
    const name = user.displayName
    const photo = user.photoURL
    const phone = user.phoneNumber
    const uid = user.uid

    return (

      <div >

        <Route exact path={this.props.match.path} />
        <Route path={`${this.props.match.path}/update`} component={ProfileUpdate} />


        <header className="heading">
          <h1 className="title"><b>Profile</b></h1>
        </header>
        <body>
        <section className="textarea has-text-centered">
          This is an explanation of the profile info page.
        </section>
        <section className="container">
          <h3><u>User Profile Information:</u></h3>
          <br /> <b>Name: </b>{name}
          <br /> <b>Email: </b>{email}
          <br /> <b>Phone Number: </b>{phone}
          <br /> <b>User ID: </b>{uid}
          <br /> <b>Photo URL: </b>{photo}
          <br /><br />
          <a className="button is-primary" href='/profile/update'>Update Profile Info</a>
        </section>
        <br /><br />
        </body>
      </div>
    )
  }
}

export default Profile
