import { useContext } from "react";
import AuthContext from "./AuthContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const Header = () => {
  const ctx = useContext(AuthContext);

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Sailing Logbook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {localStorage.getItem('isLoggedIn') && <Nav.Link href='#logout' onClick={ctx.logoutHandler}>Logout</Nav.Link>}
            {!localStorage.getItem('isLoggedIn') && <Nav.Link href='#login' onClick={ctx.loginHandler}>Login</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
