import React from 'react'
import logo from './logo.png'
import './App.css'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './classes'

const mystyles = makeStyles({
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

export default function Home () {
  //this classes thing broke somehow-- need to correct that later on.
  //const classes = mystyles()

  return (
    <div className='App'>

      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1> GiveCard Presents: GiveHelp</h1>
        <h2> A tool for Case Management</h2>
        <p />
      </header>

          <body>
          <p>
            <h2><b> Click a link to visit our different pages</b></h2>
          </p>
          <Button variant='contained' color='white' href='/orgPage'> Visit an Organization Page</Button>
          <br/> <br/>

          {/* indented block here where all the cards will live */}
          <Card style={{minWidth: 275, float: 'left', margin: 'auto'}} raised>
            <CardContent>
              <Typography className={useStyles.title} color='textSecondary' gutterBottom>
                COVID-19
              </Typography>
              <Typography variant='h5' component='h2'>
                Get CoronaVirus Support
              </Typography>
            </CardContent>
            <CardActions className={useStyles.center}>
              <Button variant='contained' href='/covid'> Learn More </Button>
            </CardActions>
          </Card>
          &nbsp;&nbsp;
          <Card style={{minWidth: 275, float: 'left', margin: 'auto'}} raised>
            <CardContent>
              <Typography className={useStyles.title} color='textSecondary' gutterBottom>
                Housing
              </Typography>
              <Typography variant='h5' component='h2'>
                Get Housing Support
              </Typography>
            </CardContent>
            <CardActions className={useStyles.center}>
              <Button variant='contained' href='/housing'> Learn More </Button>
            </CardActions>
          </Card>

          <Card style={{minWidth: 275, float: 'left', margin: 'auto'}} raised>
            <CardContent>
              <Typography className={useStyles.title} color='textSecondary' gutterBottom>
                Food
              </Typography>
              <Typography variant='h5' component='h2'>
                Get Food Support
              </Typography>
            </CardContent>
            <CardActions className={useStyles.center}>
              <Button variant='contained' href='/food'> Learn More </Button>
            </CardActions>
          </Card>

          <Card style={{minWidth: 275, float: 'left', margin: 'auto'}} raised>
            <CardContent>
              <Typography className={useStyles.title} color='textSecondary' gutterBottom>
                Jobs
              </Typography>
              <Typography variant='h5' component='h2'>
                Get Job Search Support
              </Typography>
            </CardContent>
            <CardActions className={useStyles.center}>
              <Button variant='contained' href='/job'> Learn More </Button>
            </CardActions>
          </Card>

          <br/><br/> <br/><br/><br/> <br/><br/><br/> <br/>

          <Button variant='contained' color='white' href='/resources'> View All Resources</Button>
          <br/><br/>
          <Button variant='contained' color='white' href='/registerUser'> Add a new User</Button>

          </body>

      <br /><br />
      <footer className='App-footer'>
        <a
          className='App-link'
          href='https://www.givecard.io/'
          target='_blank'
          rel='noopener noreferrer'
        >
                        Visit GiveCard
        </a>
        <b> OR </b>
        <Link to='/contact'>Contact Us</Link>
        <br />
      </footer>

    </div>
  )
}
// export default home
