import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import ProfileUpdate from './profileUpdate'
import Profile from './profile'

class Prof extends Component{
  /*
  constructor (props) {super(props);}

   */

  render () {

    return(
      <div>
        <Route exact path={this.props.match.path} component={Profile} />
        <Route path={`${this.props.match.path}/update`} component={ProfileUpdate} />
      </div>
    )
  }
}
export default Prof