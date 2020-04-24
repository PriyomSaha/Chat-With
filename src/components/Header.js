import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            navCollapsed: true,
            showNavbar: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const { navCollapsed } = this.state
        const design = {
            color: 'white',
            width:'100%',
            background: 'rgb(93, 164, 226)',
            borderRadius: '5px',
            padding: '2vh',
            fontWeight: 'bold',
            textDecoration: 'none',
            marginRight:'10px',
            border:'1px solid white'
        };
        return (
            <div>
                
                <Navbar color="info" light expand="md">
                    <NavbarBrand><h1 className="logo">Chat With...</h1></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto headerButtons" navbar>
                            <NavItem>
                            <Link to='/signup'><NavLink style={design}>Log In</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/signup'><NavLink style={design}>Sign Up</NavLink></Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
export default Header