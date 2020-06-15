import React from "react";
import Drawer from "@material-ui/core";

class NavDrawer extends React.Component {
  render() {
    return (
      <Drawer
        anchor="left"
        open={this.props.drawerOpened}
        onClose={this.props.toggleDrawer(false)}
      >
        <div
          onClick={this.props.toggleDrawer(false)}
          onKeyDown={this.props.toggleDrawer(false)}
        >
          <ul>
            <li>Button1</li>
            <li>Button2</li>
            <li>Button3</li>
          </ul>
        </div>
      </Drawer>
    );
  }
}
export default NavDrawer;