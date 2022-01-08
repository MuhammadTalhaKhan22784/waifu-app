import React from "react";
import "./Faq.css";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
function Faq() {
  return (
    <div id="faq" className="faq">
      <div data-aos="fade-up" className="faq_left">
        <h1>
          frequently <br /> asked <br /> questions
        </h1>
        <p>
          The gang: 5000 clumsy, simpleminded, and endange beans, who are more
          of a{" "}
          <span
            style={{
              color: "#FFC683",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            threat to themselves
          </span>
        </p>
      </div>
      <div data-aos="fade-up" data-aos-delay="400" className="faq_right">
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>WHAT IS MABEANS?</Accordion.Header>
            <Accordion.Body>
              Mabeans is an NFT platform that provides a variety of unique and
              funny images using Sol money as a means of payment
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>WHEN CAN I BUY A MABEANS?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit, vero deserunt? Voluptas ratione rem nihil similique
              voluptates dolore sunt, eaque, eligendi ullam amet, doloribus
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>WHAT WALLET CAN I USE?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit, vero deserunt? Voluptas ratione rem nihil similique
              voluptates dolore sunt, eaque, eligendi ullam amet, doloribus
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>HOW DO I BUT A MABEANS?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit, vero deserunt? Voluptas ratione rem nihil similique
              voluptates dolore sunt, eaque, eligendi ullam amet, doloribus
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>WILL THERE BE A PRE-SALE?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit, vero deserunt? Voluptas ratione rem nihil similique
              voluptates dolore sunt, eaque, eligendi ullam amet, doloribus
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
