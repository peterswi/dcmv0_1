import React, { Component } from 'react'
import '../App.css'
// import { makeStyles } from '@material-ui/core/styles'
import OrgUser from '../orgUser'

/*
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    float: 'left',
    margin: 'auto'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  center: {
    margin: 'auto',
    width: '50%',
    padding: '10px'
  }
})
*/

class PineStreet extends Component {
  constructor (props) {
    super(props)
    this.state = {
      orgId: 'PineStreetInn'
    }
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h2><b> The Pine Street Inn</b></h2>
        </header>
        <body className='App-page'>
        Admin: Add User Here <b /> <OrgUser orgId={this.state.orgId} />
        </body>
      </div>
    )
  }
}
export default PineStreet
