import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { app, facebookProvider } from '../firestore'

const loginStyles = {
  width: '90%',
  maxWidth: '315px',
  margin: '10px auto',
  border: '1px solid #ddd',
  borderRadius: '5px',
  padding: '10px'
}

class Login extends Component {
  constructor (props) {
    super(props)
    this.authWithFacebook = this.authWithFacebook.bind(this)
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
    this.state = {
      redirect: false
    }
  }

  authWithFacebook () {
    app.auth().signInWithPopup(facebookProvider)
      .then((result, error) => {
        if (error) {
          alert('Unable to sign in with Facebook')
        } else {
          this.setState({ redirect: true })
        }
      })
  }

  authWithEmailPassword () {
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault()

    const email = this.emailInput.value
    const password = this.passwordInput.value

    app.auth().fetchSignInMethodsForEmail(email)
      .then((providers) => {
        if (providers.length === 0) {
          // create user
          // should potentially disable this function and only allow admin to create users
          alert('Creating new account with this email.')
          return app.auth().createUserWithEmailAndPassword(email, password)
        } else if (providers.indexOf('password') === -1) {
          // they used fb
          this.loginForm.reset()
          alert('Try Facebook Login')
        } else {
          // sign user in
          return app.auth().signInWithEmailAndPassword(email, password)
        }
      })
      .then((user) => {
        if (user && user.email) {
          // not entering this block rn, need to figure out why
          alert('received')
        }
        this.loginForm.reset()
        this.setState({ redirect: true })
      })
      .catch((error) => {
        alert(error.message)
      }
      )
    console.log('authed with email')
  }

  render () {
    if (this.state.redirect === true) {
      return (<Redirect to='/' />)
    }

    return (
      <div style={loginStyles}>
        <button style={{ width: '100%' }} className='pt-button' onClick={() => this.authWithFacebook()}>
            Log In With Facebook
        </button>
        <hr style={{ marginTop: '10px', marginBottom: '10px' }} />

        <form onSubmit={(event) => this.authWithEmailPassword(event)} ref={(form) => { this.loginForm = form }}>

          <div style={{ marginBottom: '10px' }} className='pt-callout'>
            <h3>
              <u>Note:</u>
            </h3>
            If you don't have an account already, this form will create one for you.<br />
            <b>Please use the email associated with your organization. </b>
          </div>
          <label className='pt-label'>
            Email
            <input style={{ width: '100%' }} className='pt-input' name='email' type='email' ref={(input) => { this.emailInput = input }} placeholder='email' />
          </label>
          <label className='pt-label'>
            Password
            <input style={{ width: '100%' }} className='pt-input' name='password' type='password' ref={(input) => { this.passwordInput = input }} placeholder='password' />
          </label>
          <input style={{ width: '100%' }} className='pt-input' type='submit' value='Log In' />
        </form>
      </div>
    )
  }
}
export default Login
