import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import PineStreet from './pineStreetInn'
import PineStreetAdmin from './PineStreetAdmin'

class CM extends Component{
  /*
  constructor (props) {super(props);}

   */

  render () {

    return(
      <div>
        <Route exact path={this.props.match.path} component={PineStreet}/>
        <Route path={`${this.props.match.path}/admin`} component={PineStreetAdmin} />

      </div>
    )
  }
}
export default CM