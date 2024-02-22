import {
  Navbar,
  NavbarBrand,
  NavLink,
  NavItem} from 'reactstrap';
import "./styles/Nav.css";

const Nav = () => {
    
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">YODLR</NavbarBrand>
            <div className="right-nav-links">
              <NavItem>
                <NavLink className="NavLink" href="/users" color="dark">Admin</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="NavLink" href="/signup" color="dark">Signup</NavLink>
              </NavItem>
            </div>
        </Navbar>
      </div>
    );
}

export default Nav;