import React from 'react'
import './App.css'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

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

export default function Resources () {
  const classes = useStyles()
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Resource Page</h1>
        <p>Click one of the resource cards for more help</p>
      </header>
      <body className="App-page">
        <Card className={classes.root} raised>
          <CardContent>
            <Typography className={classes.title} color='textSecondary' gutterBottom>
                COVID-19
            </Typography>
            <Typography variant='h5' component='h2'>
                Get CoronaVirus Support
            </Typography>
          </CardContent>
          <CardActions className={classes.center}>
            <Button variant='contained' href='/covid'> Learn More </Button>
          </CardActions>
        </Card>
          &nbsp;&nbsp;
        <Card className={classes.root} raised>
          <CardContent>
            <Typography className={classes.title} color='textSecondary' gutterBottom>
                Housing
            </Typography>
            <Typography variant='h5' component='h2'>
                Get Housing Support
            </Typography>
          </CardContent>
          <CardActions className={classes.center}>
            <Button variant='contained' href='/housing'> Learn More </Button>
          </CardActions>
        </Card>

        <Card className={classes.root} raised>
          <CardContent>
            <Typography className={classes.title} color='textSecondary' gutterBottom>
                Food
            </Typography>
            <Typography variant='h5' component='h2'>
                Get Food Support
            </Typography>
          </CardContent>
          <CardActions className={classes.center}>
            <Button variant='contained' href='/food'> Learn More </Button>
          </CardActions>
        </Card>

        <Card className={classes.root} raised>
          <CardContent>
            <Typography className={classes.title} color='textSecondary' gutterBottom>
                Jobs
            </Typography>
            <Typography variant='h5' component='h2'>
                Get Job Search Support
            </Typography>
          </CardContent>
          <CardActions className={classes.center}>
            <Button variant='contained' href='/job'> Learn More </Button>
          </CardActions>
        </Card>
        <Card className={classes.root} raised>
          <CardContent>
            <Typography className={classes.title} color='textSecondary' gutterBottom>
                General
            </Typography>
            <Typography variant='h5' component='h2'>
                Get General Support
            </Typography>
          </CardContent>
          <CardActions className={classes.center}>
            <Button variant='contained'> Learn More </Button>
          </CardActions>
        </Card>
          &nbsp;&nbsp;
        <Card className={classes.root} raised>
          <CardContent>
            <Typography className={classes.title} color='textSecondary' gutterBottom>
                Family
            </Typography>
            <Typography variant='h5' component='h2'>
                Get Family Support
            </Typography>
          </CardContent>
          <CardActions className={classes.center}>
            <Button variant='contained'> Learn More </Button>
          </CardActions>
        </Card>

        <Card className={classes.root} raised>
          <CardContent>
            <Typography className={classes.title} color='textSecondary' gutterBottom>
                Finances
            </Typography>
            <Typography variant='h5' component='h2'>
                Get Financial Support
            </Typography>
          </CardContent>
          <CardActions className={classes.center}>
            <Button variant='contained'> Learn More </Button>
          </CardActions>
        </Card>

        <Card className={classes.root} raised>
          <CardContent>
            <Typography className={classes.title} color='textSecondary' gutterBottom>
                Healthcare
            </Typography>
            <Typography variant='h5' component='h2'>
                Get Medical Support
            </Typography>
          </CardContent>
          <CardActions className={classes.center}>
            <Button variant='contained'> Learn More </Button>
          </CardActions>
        </Card>

      </body>
      <footer />
    </div>
  )
}
