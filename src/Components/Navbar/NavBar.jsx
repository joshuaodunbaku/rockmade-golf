import IMAGES from "../../assets/images";
import { Link, useNavigate } from "react-router-dom";
import "../../Styles/navbarStyle.css"; // custom styles
import { Navbar, Nav, Button, Container } from "react-bootstrap";

function OffcanvasExample() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar expand="lg" bg="" variant="light" className="p-3 shadow">
        <Container>
          {/* Brand */}
          <Navbar.Brand onClick={() => navigate("/")}>
            <img src={IMAGES.logo} width={"200px"} height={"70px"} alt="" />
          </Navbar.Brand>
          {/* <div> */}
          {/* Buttons always visible (beside toggler) */}
          {/* <div className="d-flex flex-column order-lg-2">
            <div>
              <div className="d-flex align-items-center justify-content-end order-lg-2 ms-auto">
                <div className="btn-div rounded-pill">
                  <button className="btn btn-outline-dark p-2 px-4 rounded-pill me-2">
                    Login
                  </button>
                </div>

                <div className="btn-div rounded-pill">
                  <button className="btn btn-slideToRight btn-signup p-2 px-4 me-2 rounded-pill">
                    Signup
                  </button>
                </div>

                <div className="btn-div rounded-pill">
                  <button className="donate-btn p-2 px-4 rounded-pill">
                    Donate
                  </button>
                </div>
              </div>
            </div>

            <div></div>
          </div> */}
          <div>
            <Navbar.Toggle className="" aria-controls="main-navbar" />
          </div>

          {/* Collapsible Nav Links */}
          <Navbar.Collapse id="main-navbar" className="order-lg-1">
            <Nav className="mx-auto">
              <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate("about")}>About</Nav.Link>
              <Nav.Link onClick={() => navigate("memberships")}>
                Memberships
              </Nav.Link>
              <Nav.Link href="#modes">Game Modes</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link onClick={() => navigate("golfCourseRegistration")}>
                Course Registration
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* </div>{" "} */}
          {/* Navbar toggle */}
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
