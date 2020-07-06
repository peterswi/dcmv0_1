import React, { Component } from 'react'
import '../App.css'
// import { makeStyles } from '@material-ui/core/styles'
import OrgUser from '../orgUser'
import {app, db} from '../../firestore'
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

  componentDidMount () {
    const u = app.auth().currentUser
    const ue = u.email
    db.collection("users")
      .where("email", "==", ue)
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data().isAdmin)
        console.log("mount", data)
        this.setState({ admin: data[0] })
      })
  }



  render () {
    //need to figure out how to grab the snapshot data from above and then use it down here for authentication


    return (
      <div className='App'>
        <header className='App-header'>
          <h2><b> The Pine Street Inn</b></h2>
        </header>
        <body className='App-page'>
        <div>
          <h3>This is the content for the Pine Street Inn's Page </h3>
        </div>
        {this.state.admin
          ?(
          <div>
            Admin: Add User Here <b/> <OrgUser orgId={this.state.orgId}/>
          </div>
          )
          : null
        }


        </body>
      </div>
    )

  }
}
export default PineStreet
