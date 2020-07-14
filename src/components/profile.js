import React from 'react'
import './App.css'
import { app } from '../firestore'

import 'bulma/css/bulma.css'
import './sass/mystyles.scss'

export default function Profile () {
  const user = app.auth().currentUser
  const email = user.email
  const name = user.displayName
  const photo = user.photoURL
  const phone = user.phoneNumber
  const uid = user.uid

  return (

    <div >
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
          <br /><br /><br />
          <a className="button is-primary" href='/profileUpdate'>Update Profile Info</a>
        </section>
      </body>
      <footer />
    </div>
  )
};
