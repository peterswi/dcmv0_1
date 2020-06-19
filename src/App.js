import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './components/App.css'
/*
import firebase from './components/firestore'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebaseApp from 'firebase/app';
import 'firebase/auth';
*/

import home from './components/home'
import RegisterUser from './components/registerUser'
import orgPage from './components/orgPage'
import contact from './components/contact'
import Error from './components/error'
// import Navigation from './components/navigation'
// import PrimarySearchAppBar from './components/PrimarySearchAppBar'
import BasicNavBar from './components/basicNavBar'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { createMuiTheme } from '@material-ui/core/styles'

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


class App extends Component {
  render () {
    return (
      <div>

        <MuiThemeProvider theme={theme}>
          <BasicNavBar />

          {/* <PrimarySearchAppBar/> */}
          <Switch>
            <Route exact path='/' component={home} />
            <Route path='/contact' component={contact} />
            <Route path='/registerUser' component={RegisterUser} />
            <Route path='/orgPage' component={orgPage} />
            <Route component={Error} />
          </Switch>
        </MuiThemeProvider>
      </div>
    )
  }
}
export default App
