import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './components/App.css'
/*
import firebase from './components/firestore'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebaseApp from 'firebase/app';
import 'firebase/auth';
*/
import { base, app } from './firestore'
import Home from './components/home'
import Login from './components/login'
import Logout from './components/logout'
import RegisterUser from './components/registerUser'
import orgPage from './components/orgPage'
import contact from './components/contact'
import Error from './components/error'
import resources from './components/resources'
import Job from './components/job'
import Housing from './components/housing'
import Covid from './components/covid'
import Food from './components/food'
import Profile from './components/profile'
// import Navigation from './components/navigation'
// import PrimarySearchAppBar from './components/PrimarySearchAppBar'

import BasicNavBar from './components/basicNavBar'
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
// import { CssBaseline } from '@material-ui/core' USE OR NO?

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
  constructor(){
    super();
    this.state={
      authenticated: false ,
      loading: true
    };
  }
  componentWillMount () {
    this.removeAuthListener=app.auth().onAuthStateChanged((user)=> {
        if(user){
          this.setState({
              authenticated: true,
              loading: false
          })
        } else{
          this.setState({
            authenticated: false,
            loading: false
          })
        }
      }
    )
  }
  componentWillUnmount () {
    this.removeAuthListener();
  }


  render () {
    if (this.state.loading === true){
      return(
        <div style={{textAlign: "center", position: "absolute", top:"25%", left:"50%"}}>
          <h3>Loading</h3>
          <CircularProgress/>
        </div>
      )
    }
    return (
      <div>

        <MuiThemeProvider theme={theme}>
          <BasicNavBar authenticated={this.state.authenticated} />

          {/* <PrimarySearchAppBar/> */}
          <Switch>
            <Route exact path='/' render={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/logout' component={Logout} />
            <Route path='/contact' component={contact} />
            <Route path='/registerUser' component={RegisterUser} />
            <Route path='/orgPage' component={orgPage} />
            <Route path='/resources' component={resources} />
            <Route path='/food' component={Food} />
            <Route path='/job' component={Job} />
            <Route path='/housing' component={Housing} />
            <Route path='/covid' component={Covid} />
            <Route path='/profile' component={Profile} />
            <Route component={Error} />
          </Switch>
        </MuiThemeProvider>
      </div>
    )
  }
}
export default App
