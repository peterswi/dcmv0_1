import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='App'> {/* throwing error here and unsure why */}

      <br />
      <Button component={Link} to='/' variant='contained' color='secondary'> Home </Button><br /><br />
      <Button component={Link} to='/orgPage' variant='contained' color='secondary'> Organization
              Page
      </Button><br /><br />
      <Button component={Link} to='/resources' variant='contained' color='secondary'> All Resources </Button><br /><br />
      <Button component={Link} to='/contact' variant='contained' color='secondary'> About </Button>
    </div>

  )
}

export default Navigation
