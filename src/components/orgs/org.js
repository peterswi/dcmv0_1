import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import PS from './PineStreet/PS'
import OrgPage from './orgPage'
import CM from './CityMission/CM'

class Org extends Component{

  render () {

    return(
      <div>
        <Route exact path={this.props.match.path} component={OrgPage}/>
        <Route path={`${this.props.match.path}/pinestreet`} component={PS} />
        <Route path={`${this.props.match.path}/citymission`} component={CM} />
      </div>
    )
  }
}
export default Org