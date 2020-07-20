import React, { Component } from 'react'
import '../App.css'
// import { makeStyles } from '@material-ui/core/styles'
import OrgUser from '../orgUser'
import {app, db} from '../../firestore'

// a little bit of bulma
import 'bulma/css/bulma.css'
import '../sass/mystyles.scss'



class CityMission extends Component {
  constructor (props) {
    super(props)
    this.state = {
      orgId: 'CityMission',
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
      <div>
        <header className='heading has-text-centered'>
          <h2 className="title"><b> City Mission Boston</b></h2>
        </header>

        <body className="section">
        <div className="textarea">
          Welcome to City Mission's Page.
        </div>
        {this.state.admin
          ?(
            <div className="section has-text-centered">
              <div className="is-black">
                Admin: Add User Here
              </div>
              <div>
                <OrgUser orgId={this.state.orgId}/>
              </div>

            </div>
          )
          : null
        }

        </body>

      </div>
    )

  }
}
export default CityMission