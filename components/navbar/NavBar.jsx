import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <div className="container-xl">
        <Navbar.Brand href="/">Gene Lorenz Sarmiento</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
            <Link href="#pricing">
              <a className="nav-link">About Me</a>
            </Link>
            <Link href="/education">
              <a className="nav-link">Education</a>
            </Link>

            <Link href="/">
              <a className="nav-link">Hobbies</a>
            </Link>
          </Nav>
          <Nav>
            <NavDropdown title="Misc.">
              <NavDropdown.Item href="/projects">Projects</NavDropdown.Item>
              <NavDropdown.Item href="/images">Images</NavDropdown.Item>
              <NavDropdown.Item href="/friends">Friends</NavDropdown.Item>
              <NavDropdown.Item href="/interests">Interests</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
