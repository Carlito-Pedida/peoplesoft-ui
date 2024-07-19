import React, { useState } from "react";
import logo from "../assets/logo.png";

import {
  Col,
  Container,
  Nav,
  Navbar,
  OffcanvasBody,
  OffcanvasHeader,
  Row,
  Stack
} from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../Styles/Navigation.module.css";

const Navigation = ({ user }) => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => setShowOffcanvas(true);

  return (
    <div>
      <>
        <Navbar
          expand="lg"
          className={`justify-content-between  ${styles.navbar}`}
        >
          <Container className={`d-flex align-items-center`}>
            <Row>
              <Navbar.Brand>
                <Link to="/">
                  <img height={75} src={logo} />
                </Link>
              </Navbar.Brand>
            </Row>
            {user && (
              <Row>
                <Col>
                  <Link className="d-lg-none" to={`/profile/${user.userId}`}>
                    <img
                      style={{
                        borderRadius: "50%",
                        border: "solid 2px white"
                      }}
                      height={50}
                      width={50}
                      src={user.imageUrl}
                    />
                  </Link>
                </Col>
                <Col>
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={handleOffcanvasShow}
                  />
                  <Navbar.Offcanvas
                    show={showOffcanvas}
                    onHide={handleOffcanvasClose}
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="start"
                  >
                    <OffcanvasHeader closeButton>
                      <Navbar.Brand onClick={handleOffcanvasClose} to="#home">
                        <img height={75} src={logo} />
                      </Navbar.Brand>
                    </OffcanvasHeader>
                    <OffcanvasBody onClick={handleOffcanvasClose}>
                      <Stack className="d-lg-none" gap={3}>
                        <Link className={styles.offCanvasNavItem} to="/">
                          Home
                        </Link>
                        <Link
                          className={styles.offCanvasNavItem}
                          to="/employed"
                        >
                          Records
                        </Link>
                        <Link className={styles.offCanvasNavItem} to="/support">
                          Support
                        </Link>
                        <hr />
                        <Link className={styles.offCanvasNavItem} to="/signout">
                          Logout
                        </Link>
                      </Stack>
                    </OffcanvasBody>
                    <Nav>
                      <Stack
                        className={styles.navi}
                        direction="horizontal"
                        gap={1}
                      >
                        <Link className={styles.navItem} to="/">
                          Home
                        </Link>
                        <Link className={styles.navItem} to="/employed">
                          Records
                        </Link>
                        <Link className={styles.navItem} to="/support">
                          Support
                        </Link>
                        <Link className={styles.navItem} to="/signout">
                          Logout
                        </Link>
                        <Link
                          className={` d-none d-lg-block ${styles.navItem}`}
                          to={`/profile/${user.userId}`}
                        >
                          HELLO <span>{user.first_name}!</span>
                        </Link>
                        <Link
                          className="d-none d-lg-block"
                          to={`/profile/${user.userId}`}
                        >
                          <img
                            style={{
                              borderRadius: "50%",
                              border: "solid 3px white"
                            }}
                            height={50}
                            width={50}
                            src={user.imageUrl}
                          />
                        </Link>
                      </Stack>
                    </Nav>
                  </Navbar.Offcanvas>
                </Col>
              </Row>
            )}
            {!user && (
              <Row>
                <Col>
                  <Navbar.Toggle
                    style={{ color: "white" }}
                    aria-controls="basic-navbar-nav"
                    onClick={handleOffcanvasShow}
                  />
                  <Navbar.Offcanvas
                    show={showOffcanvas}
                    onHide={handleOffcanvasClose}
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="start"
                  >
                    <OffcanvasHeader closeButton>
                      <Navbar.Brand onClick={handleOffcanvasClose} to="/">
                        <img height={75} src={logo} />
                      </Navbar.Brand>
                    </OffcanvasHeader>
                    <OffcanvasBody onClick={handleOffcanvasClose}>
                      <Stack className="d-lg-none" gap={3}>
                        <Link className={styles.offCanvasNavItem} to="/">
                          Home
                        </Link>
                        <Link
                          className={styles.offCanvasNavItem}
                          to="/employed"
                        >
                          Records
                        </Link>
                        <Link className={styles.offCanvasNavItem} to="/support">
                          Support
                        </Link>
                        <hr />
                        <Link className={styles.offCanvasNavItem} to="/">
                          Signin
                        </Link>
                      </Stack>
                    </OffcanvasBody>
                    <Nav>
                      <Stack
                        className={styles.navi}
                        direction="horizontal"
                        gap={5}
                      >
                        <Link className={styles.navItem} to="/">
                          Home
                        </Link>
                        <Link className={styles.navItem} to="/employed">
                          Records
                        </Link>
                        <Link className={styles.navItem} to="/support">
                          Support
                        </Link>
                      </Stack>
                    </Nav>
                  </Navbar.Offcanvas>
                </Col>
              </Row>
            )}
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Navigation;
