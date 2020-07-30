import React, {Component} from 'react'
import 'bulma/css/bulma.css'
import '../../sass/mystyles.scss'

import OrgUser from '../orgUser'
import ContentEditor from '../../contentEditor'
import {app, db} from '../../../firestore'


class CityMissionAdmin extends Component{
  constructor (props)  {
    super(props);
    this.state = {
      orgId: 'CityMission',
      admin: false
    }
  }
  //consider making this its own function to be imported
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

    return(
      <div>
        <header className="Heading has-text-centered">
          <h3 className="title">City Mission Admin</h3>
        </header>
        <body className="section">
        {this.state.admin
          ?(
          <div>
            <div className="section ">
              <div className="is-black">
                <h2 className="subtitle">
                  Admin: add content to your page here.
                </h2>
              </div>
              <div className="container">
                <ContentEditor orgId={this.state.orgId}/>
                <br/>
              </div>
            </div>
            <div className="section has-text-centered">
              <div className="is-black">
                <h2 className="subtitle">Admin: Add User Here</h2>
              </div>
              <div>
                <OrgUser orgId={this.state.orgId}/>
              </div>

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

export default CityMissionAdmin