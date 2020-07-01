import React, {Component} from 'react';
import { app } from '../firestore'
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
        <input
          type="displayName"
          name="displayName"
          placeholder="Display Name"
          onChange={this.updateInput}
          value={this.state.displayName}
        />
        <input
          type="number"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={this.updateInput}
          value={this.state.phoneNumber}
          />
        <input
          type="photoURL"
          name="photoURL"
          placeholder="Profile Picture URL"
          onChange={this.updateInput}
          value={this.state.photoURL}

        /><br /><br />
        <button type="submit">Submit</button>
      </form>
    )

  }

}
export default ProfileUpdate