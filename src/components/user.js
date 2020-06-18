import React, {Component} from 'react';
import firebase from "./firestore";

//this is based on a basic intro to firestore + React

// this version is currently defunct. Can be repurposed for end-user registration

class User extends React.Component {

    constructor() {
        super();
        this.state = {
         firstname: "",
         lastname: "",
         email:"",
         userID: "",
         password:"",
         phone: null
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
        const userRef = db.collection("users").doc(this.state.userID).set({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            phone: Number(this.state.phone),
           // userID: this.state.userID,
            password: this.state.password
        });
        this.setState({
            firstname:"",
            lastname:"",
            email:"",
            phone:"",
            userID:"",
            password:""

        });
};

  render() {
    return (
        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="userID"
            placeholder="User ID"
            onChange={this.updateInput}
            value={this.state.userID}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.updateInput}
            value={this.state.password}
          /><br /><br />
          <input
            type="text"
            name="firstname"
            placeholder="First name"
            onChange={this.updateInput}
            value={this.state.firstname}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last name"
            onChange={this.updateInput}
            value={this.state.lastname}
          /><br /><br />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.updateInput}
            value={this.state.email}
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            onChange={this.updateInput}
            value={this.state.phone}
          /><br /><br />
          <button type="submit">Submit</button>
        </form>
        );
      }
   }
export default User;