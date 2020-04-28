import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import '../../App.css';
import Image from 'react-bootstrap/Image'
import Logo from "../logos/logos_white.png";
class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
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
            width: '100%',
            background: 'rgb(93, 164, 226)',
            borderRadius: '5px',
            padding: '2vh',
            fontWeight: 'bold',
            textDecoration: 'none',
            marginRight: '15px',
            marginBottom: '5px',
            border: '1px solid white'
        };
        const design1 ={
            padding:'0.5vh 2vh 0 2vh'
        }
        return (
            <div className="bg-info sticky-top">
                    <Navbar light expand="lg" >                       
                            <NavbarBrand>
                                <Link to='/roomlists'><Image src={Logo} className="logo" /></Link>
                            </NavbarBrand>
                        
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto headerButtons" navbar>
                                    <NavItem style={design1}>
                                        <Link to='/addroom'><NavLink style={design} size="6"
                                            className="py-3 px-md-5">Create New Room</NavLink></Link>
                                    </NavItem>
                                    <NavItem style={design1}>
                                        <Link to='/'><NavLink style={design} size="6"
                                            className="py-3 px-md-5">Log out</NavLink></Link>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        
                    </Navbar>
            </div>
        )
    }
}
export default Header