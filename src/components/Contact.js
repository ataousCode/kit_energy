import React from "react"
import Footer from "./Footer"

const ContactForm = () =>{

  return (
    <div class="container-fluid mt-3">
  <h2>Contact Us</h2>
  <form action="">
  <div class="mb-3 mt-3">
      <label for="email">Telephone Number</label>
      <input type="text" className="form-control" id="telephone" 
      name="email" required/>
  </div>
  <div class="mb-3 mt-3">
      <label for="email">Email Address</label>
      <input type="email" className="form-control" id="email" 
      name="email" />
  </div>
    <div class="mb-3">
      <label for="subj">Subject</label>
      <input type="text" className="form-control" id="subj"
       name="subj" />
    </div>
    <div class="mb-3 mt-3">
      <label for="comment">Your Message</label>
      <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
    </div>
    <button type="submit" className="btn btn-outline-warning">Submit</button>
  </form>
  <Footer />

</div>

  )
}

export default ContactForm