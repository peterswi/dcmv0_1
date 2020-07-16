import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import PineStreet from './orgs/pineStreetInn'
import OrgPage from './orgPage'

class Org extends Component{
  constructor (props) {super(props);}

  render () {

    return(
      <div>
        <Route exact path={this.props.match.path} component={OrgPage}/>
        <Route path={`${this.props.match.path}/pinestreet`} component={PineStreet} />
      </div>
    )
  }
}
export default Org