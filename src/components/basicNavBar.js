import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import NavDrawer from "./navDrawer";

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
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              GiveHelp
            </Typography>
            <Button color="inherit">Login</Button>
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