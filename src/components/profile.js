import React from 'react'
import './App.css'
import { app } from '../firestore'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

export default function Profile () {

  const user =app.auth().currentUser
  const email=user.email
  const name=user.displayName
  const photo=user.photoURL
  const phone=user.phoneNumber
  const uid=user.uid

  return (

    <div className='App'>
      <header className='App-header'>
        <h1><b>Profile</b></h1>
      </header>
      <body className='App-page'>
      <h3><u>User Profile Information:</u></h3>
        <br/> <b>Name: </b>{name}
        <br/> <b>Email: </b>{email}
        <br/> <b>Phone Number: </b>{phone}
        <br/> <b>User ID: </b>{uid}
        <br/> <b>Photo URL: </b>{photo}
        <br/><br/><br/>
        <Button variant='contained' color='inherit' component={Link} to='/profileUpdate' >Update Profile Info</Button>
      </body>
      <footer />
    </div>
  )
};