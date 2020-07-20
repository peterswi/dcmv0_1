import React, { Component } from 'react'
import '../../App.css'
// import { makeStyles } from '@material-ui/core/styles'
import OrgUser from '../orgUser'
import {app, db} from '../../../firestore'

// a little bit of bulma
import 'bulma/css/bulma.css'
import '../../sass/mystyles.scss'



class PineStreet extends Component {
  constructor (props) {
    super(props)
    this.state = {
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
          <h2 className="title"><b> The Pine Street Inn</b>
            {this.state.admin
            ?(<a className="button is-pulled-right" href='/organizations/pinestreet/admin'> Admin </a>)
            :null
          }</h2>
        </header>

        <body className="section">
        <div className="textarea"> 
          This is the content for the Pine Street Inn's Page
        </div>

        </body>

      </div>
    )

  }
}
export default PineStreet
