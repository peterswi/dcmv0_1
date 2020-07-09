import React, {Component} from 'react';
//import { app, db } from "../firestore";
import * as firebase from 'firebase';
import 'bulma/css/bulma.css'
import './sass/mystyles.scss'
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
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input className="input"
                type="text"
                name="firstname"
                placeholder="Eg, Bill"
                onChange={this.updateInput}
                value={this.state.firstname}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
              <input className="input"
                type="text"
                name="lastname"
                placeholder="Eg, Peterson"
                onChange={this.updateInput}
                value={this.state.lastname}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input"
                key='email'
                type="email"
                name="email"
                placeholder="Eg, give-fam@givecard.io"
                onChange={this.updateInput}
                value={this.state.email}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Phone Number</label>
            <div className="control">
              <input className="label"
                type="number"
                name="phone"
                placeholder="Eg, 617 8866 8490"
                onChange={this.updateInput}
                value={this.state.phone}
              />
            </div>
          </div>

            <div className="control">
              <label className="checkbox">
                <input
                    type="checkbox"
                    name="isAdmin"
                    onChange={this.onDeclareAdmin}
                    value={this.state.isAdmin}
                    />
                      Administrator
              </label>
            </div>
                <div className="control">
                  <button className="button is-primary" type="submit">Submit</button>
                </div>

        </form>
        );
      }
   }

export default OrgUser;