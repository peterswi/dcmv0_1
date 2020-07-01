import React, {Component} from 'react';
//import { app, db } from "../firestore";
import * as firebase from 'firebase';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

// this is based on a basic intro to firestore + React


class OrgUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
         firstname: "",
         lastname: "",
         email:"",
         password:"",
         phone: "",
         isAdmin: false,
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

/* FROM PREVIOUS VERSION-- get all orgs and have dropdown list
  async getOrgs(){
          const orgs = await firebase.firestore().collection('organizations')
          orgs.get().then((querySnapshot) =>{
            const tempDoc =querySnapshot.docs.map((doc)=>{
              return {id: doc.id, name: doc.data().OrgName}
            })
            console.log(tempDoc)
          })
        }

  componentDidMount () {
    this.setState({
      organizations:[this.getOrgs()]
    })
  }
*/

  addUser = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots:true
        });
        let ad = Boolean(this.state.isAdmin)
        let org = db.collection("organizations").doc(this.props.orgId) //in here need to have ability to pull

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
              const arrayU= firebase.firestore.FieldValue.arrayUnion
              org.update({
                users: arrayU(docRef.id)
              }).then(function(){
                alert('User Successfully Added!')
                   if ( ad === true ){ // changed from == to ===, if problems arise
                      org.update({
                        admin: arrayU(docRef.id)
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
            organizationId:"",
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
            key='email'
            type="email"
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
            Administrator
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