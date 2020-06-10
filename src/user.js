import React from 'react';
import firebase from "./firestore";

//this is based on a basic intro to firestore + React

class User extends React.Component {

    constructor() {
        super();
        this.state = {
         firstname: "",
         lastname: "",
         email:"",
         userID: "",
         password:""
    };
  }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    addUser = e => {
        e.preventDefault();
        const db =firebase.firestore();
        db.settings({
            timestampsInSnapshots:true
        });
        const userRef = db.collection("users").add({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            userID: this.state.userID,
            password: this.state.password
        });
        this.setState({
            firstname:"",
            lastname:"",
            email:"",
            userID:"",
            password:""
        });
};

  render() {
    return (
        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="firstname"
            placeholder="First name"
            onChange={this.updateInput}
            value={this.state.firstname}
          /><br /><br />
          <input
            type="text"
            name="lastname"
            placeholder="Last name"
            onChange={this.updateInput}
            value={this.state.lastname}
          /><br /><br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.updateInput}
            value={this.state.email}
          /><br /><br />
          <input
            type="text"
            name="userID"
            placeholder="User ID"
            onChange={this.updateInput}
            value={this.state.userID}
          /><br /><br />
          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={this.updateInput}
            value={this.state.password}
          /><br /><br />
          <button type="submit">Submit</button>
        </form>
        );
      }
   }
export default User;