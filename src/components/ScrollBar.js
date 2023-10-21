import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

const ScrollBar = () =>{
    const [showScrollButton, setShowScrollButton] = useState(false);

     // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

  // Function to handle scroll events and show/hide the scroll button
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
   
    <Container >
        <Row>
        <div className="justify-content-end">
        <Col md={6}>
         {showScrollButton && (
            <button className="btn btn-secondary" onClick={scrollToTop}>
                Scroll to Top
            </button>
        )}
        </Col>
        </div>

        </Row>
    </Container>
    )
}

export default ScrollBar;