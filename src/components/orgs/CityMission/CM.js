import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import CityMission from './CityMission'
import CityMissionAdmin from './CityMissionAdmin'

class CM extends Component{
  /*

  constructor (props) {super(props);}

   */

  render () {

    return(
      <div>
        <Route exact path={this.props.match.path} component={CityMission}/>
        <Route path={`${this.props.match.path}/admin`} component={CityMissionAdmin} />

      </div>
    )
  }
}
export default CM