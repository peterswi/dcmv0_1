import React from 'react'
import OrgUser from '../components/orgs/orgUser'
import '../components/App.css'

const RegisterUser = () => {
  return (
    <div className='App-header'>
      <h1>Register New User</h1>
      <p>
        <h3>Add Organization User: <OrgUser /> </h3>
      </p>
    </div>
  )
}

export default RegisterUser
