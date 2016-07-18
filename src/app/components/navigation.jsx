var React = require('react');
var Bootstrap = require('react-bootstrap');

var Navbar = Bootstrap.Navbar;
var Nav = Bootstrap.Nav;
var NavItem = Bootstrap.NavItem;
var DropdownButton = Bootstrap.DropdownButton;
var MenuItem = Bootstrap.MenuItem;

var Navigation = React.createClass({

    render: function() {
        return (
            <Navbar className="navbar navbar-inverse navbar-fixed-top">
                <a className="navbar-brand" href="#">{this.props.projectName}</a>
                <Nav className="nav navbar-nav">
                    <NavItem className="active" eventKey={1} href="#home">{this.props.home}</NavItem>
                    <NavItem eventKey={2} href="#about">About</NavItem>
                    <NavItem eventKey={2} href="#about">Contact</NavItem>
                    
                </Nav>
            </Navbar>
        );
    }
});

module.exports = Navigation;
