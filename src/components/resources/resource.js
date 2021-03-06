import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import Resources from './resources'
import Covid from './covid'
import Food from './food'
import Housing from './housing'
import Job from './job'

class Resource extends Component{
  /*
  constructor (props) {
    super(props);
  }
  */

  render () {

    return(
      <div>
        <Route exact path={this.props.match.path} component={Resources} />
        <Route path={`${this.props.match.path}/covid`} component={Covid} />
        <Route path={`${this.props.match.path}/food`} component={Food} />
        <Route path={`${this.props.match.path}/housing`} component={Housing} />
        <Route path={`${this.props.match.path}/job`} component={Job} />
      </div>
    )
  }
}
export default Resource