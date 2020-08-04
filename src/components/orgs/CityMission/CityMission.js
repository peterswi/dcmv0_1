import React, { Component } from 'react'

import {app, db} from '../../../firestore'

// a little bit of bulma
import 'bulma/css/bulma.css'
import '../../sass/mystyles.scss'



class CityMission extends Component {
  constructor (props) {
    super(props)
    this.state = {
      admin: false,
      content: 'The Content',
      contentArray: []
    }

    //this.componentDidMount=this.componentDidMount.bind(this)
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

    //trying to mount our content

    db.collection("organizations").doc("CityMission")
      .get().then(function(doc){
      if(doc.exists){
        let content=doc.data().content[0]
        console.log('content',content)
        this.setState({
          content: content,
          contentArray: this.state.arr.concat(content)
        })

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    })



  }
/*
  getContent=() =>{
    db.collection("organizations").doc("CityMission")
      .get().then(function(doc){
      if(doc.exists){
        console.log("doc data",doc.data())
        const content=doc.data().content[0]
        console.log('content',content)
        this.setState({content: content})
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    })
  }

 */



  render () {
    //need to figure out how to grab the snapshot data from above and then use it down here for authentication

    //this.getContent()
    return (
      <div>
        <header className='heading has-text-centered'>
          <h2 className="title"><b> City Mission Boston</b>
          {this.state.admin
          ?(<a className="button is-pulled-right" href='/organizations/citymission/admin'> Admin </a>)
            :null
          }
          </h2>

        </header>

        <body className="section">
        <div className="container">
          <h2 className="subtitle">Welcome to City Mission's Page.</h2>
          <br/>
        </div>
        <div className="textarea">
          {this.state.content}

        </div>


        </body>

      </div>
    )

  }
}
export default CityMission