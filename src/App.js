import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './components/App.css'
import 'bulma/css/bulma.css'
/*
import firebase from './components/firestore'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebaseApp from 'firebase/app';
import 'firebase/auth';
*/
import { app } from './firestore'
import Home from './components/home'
import Login from './components/profile/login'
import Logout from './components/profile/logout'

import contact from './components/contact'
import About from './components/about'
import Error from './components/error'
import IssuePage from './components/issuePage'

import Org from './components/orgs/org'
import Resource from './components/resources/resource'

import Prof from './components/profile/prof'
import NavBar from './components/navbar'
import Footer from './components/footer'
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33ff98',
      main: '#00ff7f',
      dark: '#00b258',
      contrastText: '#000'
    },
    secondary: {
      light: '#eeeeee',
      main: '#e0e0e0',
      dark: '#bdbdbd',
      contrastText: '#000'
    }
  }
})
/*
 //Basically, trying to figure out how to pass this.state.authenticated to the router below. Figure it out later
const homeAuth =(props) =>{
  return(
    <Home authenticated={this.props.authenticated}/>
  )
}
*/

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      authenticated: false,
      loading: true
    }
  }

  componentWillMount () {
    this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false
        })
      } else {
        this.setState({
          authenticated: false,
          loading: false
        })
      }
    }
    )
  }

  componentWillUnmount () {
    this.removeAuthListener()
  }

  render () {
    if (this.state.loading === true) {
      return (
        <div style={{ textAlign: 'center', position: 'absolute', top: '25%', left: '50%' }}>
          <h3>Loading</h3>
          <CircularProgress />
        </div>
      )
    }
    return (
      <div>

        <MuiThemeProvider theme={theme}>
          {/*<BasicNavBar authenticated={this.state.authenticated} />*/}
          <NavBar authenticated={this.state.authenticated}/>
          <Switch>
            <Route exact path='/' render={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/logout' component={Logout} />
            <Route path='/profile' component={Prof} />
            <Route path='/about' component={About}/>
            <Route path='/contact' component={contact} />
            <Route path='/organizations' component={Org} />
            <Route path='/resources' component={Resource} />
            <Route path='/issue' component={IssuePage}/>
            <Route component={Error} />
          </Switch>
        </MuiThemeProvider>
        <Footer/>
      </div>
    )
  }
}
export default App
