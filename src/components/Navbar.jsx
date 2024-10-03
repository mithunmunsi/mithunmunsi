import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/react.svg';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import youtube from '../assets/youtube.png';
import tiktok from '../assets/tiktok.png';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Mithun's Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-social">
            <div className="social-icons">
              <a href="https://x.com/mithunmunsi">
                <img src={twitter} alt="" />
              </a>
              <a href="https://www.facebook.com/mithun.munsi">
                <img src={facebook} alt="" />
              </a>
              <a href="https://www.instagram.com/mithun.munsi">
                <img src={instagram} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/mithunmunsi">
                <img src={linkedin} alt="" />
              </a>
              <a href="https://www.youtube.com/@mithunmunsi">
                <img src={youtube} alt="" />
              </a>
              <a href="https://www.tiktok.com/@mithun.munsi">
                <img src={tiktok} alt="" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
