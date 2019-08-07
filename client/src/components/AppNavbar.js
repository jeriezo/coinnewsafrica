import React from 'react';
// import logo from '../logo.svg';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';
// import News from './News';




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
                            <NavLink>
                                NEWS
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink>
                                <RegisterModal />
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink>
                                <LoginModal />
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink>
                                <Logout />
                            </NavLink>
                        </NavItem>


                    </Nav>
                </Navbar>
            </div >
        );
    }
}
export default AppNavbar
