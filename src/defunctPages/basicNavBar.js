import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NavDrawer from "./navDrawer";
import Grid from "@material-ui/core/Grid";
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { useStyles } from './classes'
import { Link } from 'react-router-dom'

//I dont think UseStyles is working currently
import 'bulma/css/bulma.css'
import '../components/sass/mystyles.scss'

class BasicNavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drawerOpened: false,
     // authenticated: this.props.authenticated
    };
  }
  toggleDrawer = booleanValue => () => {
    this.setState({
      drawerOpened: booleanValue
    });
  };

  render() {



    return (
      <div className="navbar is-spaced">

          <AppBar position="dynamic">
            <Toolbar>
              <Grid container spacing={1} alignItems='center' justify='center'>
                <Grid item xs>
                  <IconButton
                    color="inherit"
                    className={useStyles.menuButton}
                    aria-label="Menu"
                    onClick={this.toggleDrawer(true)}
                  >
                    <MenuIcon/>

                  </IconButton>
                </Grid>
                <Grid item xs={4}>
                  {this.props.authenticated
                    ? (
                      <div className={useStyles.search}>

                        <SearchIcon/>

                        <InputBase

                          color="secondary"
                          placeholder='Search…'
                          classes={{
                            root: useStyles.inputRoot,
                            input: useStyles.inputInput
                          }}
                          inputProps={{ 'aria-label': 'search' }}
                        />

                      </div>)
                    : null
                  }
                </Grid>
                <Grid item xs={5}>
                  <Typography className={useStyles.title} variant='h6' noWrap>
                    GiveHelp
                  </Typography>
                </Grid>

                  {
                    this.props.authenticated
                      ?(
                        <div>
                          <Button variant="contained" color="secondary"  component={Link} to='/profile' startIcon={<AccountBoxIcon /> }>Profile</Button>
                          <IconButton color="inherit" anchor="right" component={Link} to='/logout' aria-label="Log out">
                            <ExitToAppIcon/>
                          </IconButton>

                        </div>
                      )
                      :(
                          <div>
                          <Button variant='contained' color="white" anchor="right" component={Link} to='/login'>Login</Button>


                          </div>
                      )
                    }

              </Grid>
            </Toolbar>
          </AppBar>
        {this.props.authenticated
          ?(
            <NavDrawer
              drawerOpened={this.state.drawerOpened}
              toggleDrawer={this.toggleDrawer}
            />
          )
          : null

        }


      </div>
    );
  }
}
export default BasicNavBar;