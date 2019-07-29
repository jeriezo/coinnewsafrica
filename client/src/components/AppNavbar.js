import React from 'react';
// import logo from '../logo.svg';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';
import { ButtonContainer } from './Button';

class AppNavbar extends React.Component {
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
        return (
            <div className="navBar bg-dark">
                <Navbar expand="md" style={{ color: "white" }}>
                    <NavbarBrand >
                        <img href="/blogs" src="..." title="Coinnewsafrica" style={{ width: "150px", height: "70px", marginLeft: "0px" }} alt="logo" />
                    </NavbarBrand>
                    <Nav className="ml-auto">
                        <NavItem>
                            <NavLink><ButtonContainer outline color="success">News</ButtonContainer></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><ButtonContainer outline color="success">
                                Teams
                                    </ButtonContainer></NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div >
        );
    }
}
export default AppNavbar
