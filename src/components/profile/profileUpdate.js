import React, {Component} from 'react';
import { app } from '../../firestore'
import { Redirect } from 'react-router-dom'

class ProfileUpdate extends Component {
  constructor (props) {
    super(props);
    this.state={
      displayName:"",
      phoneNumber:"",
      photoURL:"",
      redirect: false
    }
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateUser = e => {
    e.preventDefault()
    const user=app.auth().currentUser;
    user.updateProfile({
      displayName: this.state.displayName,
      photoURL: this.state.photoURL
    }).then(function(){
      console.log("Succesful update.")
    }).catch(function(error){
      console.log("something going wrong",error)
    })
    /* phone number not yet working-- might need to authenticate?
    user.updatePhoneNumber({
      phoneNumber: Number(this.state.phoneNumber)
      }
    ).then(function(){
      console.log("phone number updated")
    }).catch(function(error){
      console.log("number update",error)
    })
    */

    this.setState({
      displayName: "",
      phoneNumber: "",
      photoURL:"",
      redirect: true
    })

  };

  render(){
    if (this.state.redirect === true) {
      return( <Redirect to='/profile'/>)
    }
    return(

      <form onSubmit={this.updateUser}>
        <div className="field">
          <label className="label"> Display Name</label>
          <div className="control">
            <input className="input"
              type="text"
              name="displayName"
              placeholder="Display Name"
              onChange={this.updateInput}
              value={this.state.displayName}
            />
          </div>
        </div>
        <div className="field">
          <label className="label"> Phone Number</label>
          <div className="control">
            <input className="input"
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              onChange={this.updateInput}
              value={this.state.phoneNumber}
            />
          </div>
        </div>
        <div className="field">
          <label className="label"> Photo URL</label>
          <div className="control">
            <input className="input"
              type="photoURL"
              name="photoURL"
              placeholder="Profile Picture URL"
              onChange={this.updateInput}
              value={this.state.photoURL}
            />
          </div>
        </div>
        <button className="button is-primary" type="submit">Submit</button>
        <br />
      </form>
    )

  }

}
export default ProfileUpdate