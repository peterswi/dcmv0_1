import React from 'react'
import logo from './logo.png'
import './App.css'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

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

export default function OrgPage() {
  const classes = useStyles()
    return (
      <div className='App'>
        <img src={logo} alt='logo'/>
        <header className='App-header'>
          <h1>
            Organization Page
          </h1>
        </header>

        <body className={classes.center}>
        <h3>
          Visit an Organization Page
        </h3>
        <Card className={classes.root} raised>
          <CardContent>
            <Typography className={classes.title} color='textSecondary' gutterBottom>
              Pine Street Inn
            </Typography>
            <Typography variant='h5' component='h2'>
              Visit the Pine Street Inn's Page
            </Typography>
          </CardContent>
          <CardActions className={classes.center}>
            <Button variant='contained' href='/pineStreet'> Learn More </Button>
          </CardActions>
        </Card>
        </body>

      </div>

    )

}
