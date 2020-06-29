import React from 'react'
import './App.css'
import { app } from '../firestore'

export default function Profile () {

  const user =app.auth().currentUser
  const email=user.email
  const name=user.displayName
  const phone=user.phoneNumber
  const uid=user.uid

  return (

    <div className='App'>
      <header className='App-header'>
        Profile
      </header>
      <body className='App-page'>
      <h3><u>User Profile Information:</u></h3>
        <br/> <b>Name: </b>{name}
        <br/> <b>Email: </b>{email}
        <br/> <b>Phone Number: </b>{phone}
        <br/> <b>User ID: </b>{uid}

      </body>
      <footer />
    </div>
  )
};