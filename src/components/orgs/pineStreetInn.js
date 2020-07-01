import React, { Component } from 'react'
import '../App.css'
// import { makeStyles } from '@material-ui/core/styles'
import OrgUser from '../orgUser'
import {app} from '../../firestore'
import * as firebase from 'firebase';

/*
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    float: 'left',
    margin: 'auto'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  center: {
    margin: 'auto',
    width: '50%',
    padding: '10px'
  }
})
*/

class PineStreet extends Component {
  constructor (props) {
    super(props)
    this.state = {
      orgId: 'PineStreetInn',
      admin: false
    }
  }

  async checkAdmin(){
    const user=app.auth().currentUser
    const email=user.email
    const db=firebase.firestore()
    let admin=false
    db.collection("users").where("email","==",email).get().then(function(querySnapshot){
      querySnapshot.forEach(function(doc){
        admin=doc.data().isAdmin
        console.log("admin:",admin)
      })

      })
  }

  render () {
    //need to figure out how to grab the snapshot data from above and then use it down here for authentication
    console.log(this.checkAdmin())
    if(true){
      return (
        <div className='App'>
          <header className='App-header'>
            <h2><b> The Pine Street Inn</b></h2>
          </header>
          <body className='App-page'>

          <div>
            Admin: Add User Here <b /> <OrgUser orgId={this.state.orgId} />
          </div>

          </body>
        </div>
      )

    }
    return (
      <div className='App'>
        <header className='App-header'>
          <h2><b> The Pine Street Inn</b></h2>
        </header>
        <body className='App-page'>

        <div>
          This is the content for the Pine Street Inn's Page
        </div>

        </body>
      </div>
    )
  }
}
export default PineStreet
