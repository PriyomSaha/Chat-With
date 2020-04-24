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
        
        const design = {
            color: 'white',
            width:'100%',
            background: 'rgb(93, 164, 226)',
            borderRadius: '5px',
            padding: '2vh',
            fontWeight: 'bold',
            textDecoration: 'none',
            marginRight:'15px',
            marginBottom:'5px',
            border:'1px solid white'
        };
        return (
            <div>
                
                <Navbar color="info" light expand="md">
                    <Link to='/'><NavbarBrand><h1 className="logo">Chat With...</h1></NavbarBrand></Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto headerButtons" navbar>
                            <NavItem>
                            <Link to='/login'><NavLink style={design} size="6" className="py-3 px-md-5">Log In</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/signup'><NavLink style={design}size="6" className="py-3 px-md-5">Sign Up</NavLink></Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
export default Header