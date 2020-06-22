import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { base, facebookProvider } from './firestore'

const loginStyles = {
  width: "90%",
  maxWidth: "315px",
  margin: "10px auto",
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "10px"
}


class Login extends Component{
  constructor(props){
    super(props)
    this.authWithFacebook = this.authWithFacebook.bind(this)
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
    this.state ={
      redirect: false
    }
  }
  authWithFacebook(){
    base.auth().signInWithPopup(facebookProvider)
      .then((result, error)=>{
        if (error){
          alert('Unable to sign in with Facebook')
        }
        else{
          this.setState({ redirect: true})
        }
      })
  }
  authWithEmailPassword(){
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault()
    console.log("authed with email")
    console.table([{
      email: this.emailInput.value,
      password: this.passwordInput.value
    }])
  }


  render(){
    if (this.state.redirect===true){
      return <Redirect to='/' />
    }
    return(
      <div style={loginStyles}>
        <button style={{width: "100%"}} className="pt-button" onClick={ ()=> this.authWithFacebook() }>
            Log In With Facebook
        </button>
          <hr style={{marginTop: "10px", marginBottom:"10px"}}/>

        <form onSubmit={ (event) => this.authWithEmailPassword(event) } ref={(form)=>{this.loginForm=form}}>

          <div style={{marginBottom:"10px"}} className="pt-callout">
            <h5>
              Note
            </h5>
            If you don't have an account already, this form will create one?
          </div>
          <label className="pt-label">
            Email
            <input style ={{width:"100%"}} className="pt-input" name="email" type="email" ref={(input)=>{this.emailInput=input}} placeholder="email"></input>
          </label>
          <label className="pt-label">
            Password
            <input style ={{width:"100%"}} className="pt-input" name="password" type="password" ref={(input)=>{this.passwordInput=input}} placeholder="password"/>
          </label>
          <input style ={{width:"100%"}} className="pt-input" type="submit" className="pt-button" value="Log In"></input>
        </form>
      </div>
    )
  }
}
export default Login