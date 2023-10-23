import React from "react"
import Footer from "./Footer"
import {Container, Row, Col} from 'react-bootstrap';

const ContactForm = () =>{

  return (
    <div class="container-fluid mt-3">

      <Container>
        <Row>
          <Col md={6}>
          <h2>Contact Us</h2>
          <form action="">
            <div class="mb-3 mt-3">
              <label for="email">Telephone Number</label>
              <input type="text" className="form-control" id="telephone" name="email" required/>
            </div>
            <div class="mb-3 mt-3">
              <label for="email">Email Address</label>
              <input type="email" className="form-control" id="email" name="email" />
            </div>
            
            <div class="mb-3">
              <label for="subj">Subject</label>
              <input type="text" className="form-control" id="subj" name="subj" />
            </div>
            <div class="mb-3 mt-3">
              <label for="comment">Your Message</label>
              <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
            </div>
            <button type="submit" className="btn btn-outline-warning">Submit</button>
          </form><br />
        </Col>
          
        <Col md={6}>
            <h2>Offices</h2><br /><br />
            <strong>Address</strong><br />
            Blue Saxo building<br />
            LSS airport road<br />
            Dakar, Senegal<br />
            Korofine north street 161 Bamako, Mali<br />
            Ryad, opposite bedir school Niamey, Niger<br /><br />

            <strong>Phone</strong><br />
            Tel: +221 33 860 81 61<br />
            Cell: +221 77 637 64 22<br /> <br />

            <strong>Emails</strong><br />
            Kitenergy@kit-energy.com<br />
            Kitenergy@gmail.com
          </Col>
        </Row>
      </Container>
  <Footer />

</div>

  )
}

export default ContactForm