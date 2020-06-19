import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import NavDrawer from "./navDrawer";
import Grid from "@material-ui/core/Grid";
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { useStyles } from './classes'

//I dont think UseStyles is working currently


class BasicNavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drawerOpened: false
    };
  }
  toggleDrawer = booleanValue => () => {
    this.setState({
      drawerOpened: booleanValue
    });
  };


  render() {



    return (
      <div className={useStyles.grow}>
        <AppBar position="static">
          <Toolbar>
            <Grid container spacing={3}>
              <Grid item xs>
              <IconButton
                color="inherit"
                className={useStyles.menuButton}
                aria-label="Menu"
                onClick={this.toggleDrawer(true)}
              >
                <MenuIcon />

              </IconButton>
                </Grid>
                <Grid item xs={3}>
                  <div className={useStyles.search}>
                  <div className={useStyles.searchIcon}>
                         <SearchIcon />
                      </div>
                    <InputBase
                        placeholder='Search…'
                          classes={{
                            root: useStyles.inputRoot,
                            input: useStyles.inputInput
                          }}
                          inputProps={{ 'aria-label': 'search' }}
                        />

                      </div>
                  </Grid>
                  <Grid item xs={6} alignContent='center'>
              <Typography className={useStyles.title} variant='h6' noWrap>
                GiveHelp
              </Typography>
                    </Grid>
              <Grid item xs>
              <Button color="inherit" anchor="right">Login</Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <NavDrawer
          drawerOpened={this.state.drawerOpened}
          toggleDrawer={this.toggleDrawer}
        />
      </div>
    );
  }
}
export default BasicNavBar;