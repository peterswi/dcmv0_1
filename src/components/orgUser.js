import React, {Component} from 'react';
import firebase from "./firestore";

//this is based on a basic intro to firestore + React

class OrgUser extends Component {

    constructor() {
        super();
        this.state = {
         firstname: "",
         lastname: "",
         email:"",
         password:"",
         phone: null,
         organization: "",
         isAdmin: false
    };
  }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
 //need to tinker with this-- as of now, when every time the checkbox is toggled it declares the admin true, meaning it makes it true whenever the checkbox changes, whether from unchecked to checked or vice versa
    onDeclareAdmin = e => {
        this.setState({
            [e.target.name]: true
        });
    };

    addUser = e => {
        e.preventDefault();
        const db =firebase.firestore();
        db.settings({
            timestampsInSnapshots:true
        });
        let ad = Boolean(this.state.isAdmin)
        var org = db.collection("organizations").doc("Charlie's House") //in here need to have ability to pull
         db.collection("users").add({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            phone: Number(this.state.phone),
            password: this.state.password,
            isAdmin: ad

        })
            .then(function (docRef) {
              console.log('Doc successful')
              org.update({
                users: firebase.firestore.FieldValue.arrayUnion(docRef.id)
              }).then(function(){
                alert('User Successfully Added!')

                   if ( ad == true ){
                      org.update({
                        admin: firebase.firestore.FieldValue.arrayUnion(docRef.id)
                      }).then(function(){
                        alert('Added as admin!')
                      } )

              }
                }
              )

            })
            .catch(function (error) {
              console.error('Error writing doc', error)
        })

        this.setState({
            firstname:"",
            lastname:"",
            email:"",
            phone:"",
            userID:"",
            password:"",
            isAdmin: false

        });
};

  render() {
    return (
        <form onSubmit={this.addUser}>

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
            Administrator <nbsp/><nbsp/>
            <input
                type="checkbox"
                name="isAdmin"
                onChange={this.onDeclareAdmin}
                value={this.state.isAdmin}
                />
          <button type="submit">Submit</button>
        </form>
        );
      }
   }

export default OrgUser;