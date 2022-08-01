import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="md">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/yosef-haimjan/"
                target="_blank"
              >
                <img src={navIcon1} alt="Linkedin" />
              </a>
              <a href="https://www.facebook.com/yosef.haimjan" target="_blank">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/yosef_10_/" target="_blank">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>2022 Yosef Haimjan. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
