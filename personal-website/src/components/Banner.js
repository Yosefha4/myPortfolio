import { useState, useEffect } from "react";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import Typed from "react-typed";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["web developer", "web design", "software developer"];
  const [text, setText] = useState("");
  const period = 2000;

  useEffect(() => {});

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>
              {`Hi !  I'm Yosef  `} <br/> {" "}
              <span className="wrap">
                {" "}
                <Typed
                  strings={[
                    "web developer",
                    "web design",
                    "software developer",
                  ]}
                  typeSpeed={130}
                  backSpeed={60}
                  loop
                />
              </span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img className = 'headBImg' src={headerImg} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
