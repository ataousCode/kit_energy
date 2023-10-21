import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import ScrollBar from './ScrollBar';


const Footer = () => {
    return (
      <footer className="bg-dark text-white py-5">
        <Container>
          <Row>
            <Col md={3}>
              <h5>Translate the Site</h5>
              <p>some flags here</p>
            </Col>
            <Col md={3}>
              <h5>Recent Articles</h5>
              <p>Brand Representation<br />
              <small>March 12, 2016</small>
              </p>
              <hr />
              <p>An Expert<br />
              <small>March 12, 2016</small>
              </p>
              <hr />

              <p>Expertise<br />
              <small>March 12, 2016</small>
              </p>
            </Col>
            <Col md={3}>
              <h5>SOLAR KIT</h5>
              <p>
                <img src='logo.png' className='img-fluid'/>
              </p>
            </Col>
            <Col md={3}>
              <h5>10 lamps</h5>
              <h5>1 Television</h5>
              <h5>1 fan</h5>
              <h5>2 computers</h5>
              <h5>1 modem</h5>
              <h5>1 fridge</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-left m-3">
                &copy; {new Date().getFullYear()} Ô DEVELOPMENT
              </p>
            </Col>
            <Col>
              <p className="justify-content-end m-2">
              <ScrollBar />
              </p>
            </Col>
          
          </Row>
        </Container>
      </footer>
    );
  };
  
  export default Footer;