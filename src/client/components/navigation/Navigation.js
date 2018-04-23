import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { login, logout } from "../../redux/actions";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarToggler,
  Collapse,
  Nav,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledDropdown
} from "reactstrap";

const navigationLinks = [
  {
    href: "/",
    name: "Home"
  },
  {
    href: "/developer",
    name: "Developer"
  }
];

class Navigation extends React.Component {
  state = {
    isOpen: false
  };

  render() {
    const { user, logout } = this.props;
    return (
      <Navbar style={{ backgroundColor: "royalblue" }} dark expand="sm">
        <NavbarBrand>Navigation</NavbarBrand>
        <NavbarToggler
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
        />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {navigationLinks.map((link, index) => (
              <NavLink key={index} exact className="nav-link" to={link.href}>
                {link.name}
              </NavLink>
            ))}
            {user && (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {user.name}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Dashboard</DropdownItem>
                  <DropdownItem>Settings</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => logout()}>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
const mapStateToProps = state => ({
  user: state.userReducers.currentUser
});

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
