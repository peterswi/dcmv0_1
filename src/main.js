import React from 'react'
import { Switch, Route } from 'react-router-dom'

import home from './components/home'
import RegisterUser from './defunctPages/registerUser'
import orgPage from './components/orgs/orgPage'
import contact from './components/contact'
import Error from './components/error'
// import Navigation from './components/navigation'

const main = () => {
  return (

    <Switch>
      <Route exact path='/home' component={home} />
      <Route path='/contact' component={contact} />
      <Route path='/registerUser' component={RegisterUser} />
      <Route path='/orgPage' component={orgPage} />
      <Route component={Error} />
    </Switch>
  )
}
export default main
