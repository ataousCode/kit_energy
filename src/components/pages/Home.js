import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import FlipCards from './FlipCards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faBell, faVcard, faClock, faSun} from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';

const Home = () => {
    const initialProgress = {
        services: 0,
        competences: 0,
        results: 0,
      };
    
      const [progress, setProgress] = useState(initialProgress);

    
      // Simulate the progress bars filling over time
      useEffect(() => {
        // Simulated progress values (percentages)
        const simulatedProgress = {
          services: 92,
          competences: 97,
          results: 100,
        };
    
        // Set the progress values after a delay
        setTimeout(() => {
          setProgress(simulatedProgress);
        }, 1000); // Adjust the delay as needed
      }, []);
      

 
  return (
    <div className='container-fluid'>
      <Container>
        <Row>
          <FlipCards />
        </Row>
        <br /><br /><br />

        <Row>
        <Col md={3}>
            <div className="grid-icon">
               <FontAwesomeIcon icon={faSun} size='5x' className='grid'/>
              </div>
              <div className="grid-description">
              <strong className=''>An expertise </strong><br />
              <br />
                KIT has proven expertise in its fields.
                Our technical teams support you from the design phase, ensure professional implementation, advise you, save you time and help you make your investment profitable through quality maintenance.
            </div>
          </Col>
          <Col md={3}>
            <div className="grid-icon">
                <FontAwesomeIcon icon={faBell} size='5x' className='grid'/>
              </div>
              <div className="grid-description">
              <strong className='text-center'>A know-how</strong><br />
              <br />
              KIT has proven expertise in its areas of expertise.
              Our achievements do not suffer from any technical objection.
              Our quality control agents are our most formidable controllers. They check everything on behalf of the customer before organizing acceptances with the end customer.
            </div>
          </Col>
          <Col md={3}>
              <div className="grid-icon">
                <FontAwesomeIcon icon={faClock} size='5x' className='grid'/>
              </div>
              <div className="grid-description">
              <strong className='text-center'>A representation of brands</strong><br />
              <br />
              KIT represents the biggest brands in its areas of expertise to guarantee satisfaction to its customers.
              The high quality and longevity of the products offered allow our customers to save money in the short and medium term.
              </div>
          </Col>
          <Col md={3}>
            <div className="grid-icon">
                <FontAwesomeIcon icon={faArrowAltCircleRight} size='5x' className='grid'/>
            </div>
              <div className="grid-description">
              <strong className='text-center'>Innovations</strong><br />
              <br />
              KIT innovates to make its contribution to technological development.
              Indeed, we have a research program around subjects that impact the daily lives of African and global populations.
              Our software will make your life easier.
              </div>
          </Col>
        </Row>
        <Row>
            <div className="divider-content">
                <Col md={4}>
              <p className="divider-text text-left">LEARN MORE ABOUT ENERGY KIT</p>
              </Col>
              <Col md={4}>
                <FontAwesomeIcon icon={faArrowAltCircleRight} className="divider-icon" />
              </Col>
              <Col md={4}>
                <button className="btn btn-outline-warning divider-button float-left">See More</button>
              </Col>
            </div>
            <Col md={6}>
                <div className='container-fluid'>
                <img 
                src='http://kit-energy.com/wp-content/uploads/2016/02/IMG-20171028-WA0028.jpg'
                width='75%'
                ></img>
                </div>
            </Col>
            <Col md={6}>
              <strong>Climatisation</strong><br />
              
              <p>Climatisation de Précision pour Data center, industrie, institutionnel (Etude,fourniture, formation, installation, monitoring, mise en réseau, maintenance)
              KIT est distributeur de VERTIV
              Climatisation de confort pour commerce, bureau et domicile (Etude, fourniture, installation, maintenance)
              </p><br /> <br /> 
              
              <strong>Energie</strong><br />
              <p>Energie solaire pour domicile, commerce, bureau, industrie, pompage de l’eau.</p><br /> <br /> <br />
                <button className="btn btn-outline-warning divider-button float-left">See More</button>
            </Col>

          <Col md={4}>
            <br /><br />
            <div >
                <h2 style={{color: 'blue'}}>Alfa Laval</h2>
                <p> KIT is distributor of Alfa Laval in Senegal
                    assist and advise users for sustainable and optimal use of their Alfa Laval equipment.
                    We sell new equipment (separators, centrifuges, plate exchangers, heaters, etc.) and spare parts.
                </p>
                <button className="btn btn-outline-warning  divider-button float-left">
                    Read More
                </button>
            </div>
          </Col>

          <br /><br />
          
          <Col md={4}>
          <svg className="icon">
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="divider-icon" />
           </svg>
           <strong className='side'>Design & Sizing</strong>
          </Col>

          <Col md={4}>
          <svg className="icon">
              <FontAwesomeIcon icon={faClock} className="divider-icon" />
           </svg>
           <strong className='side'>
            After-sales service 
           &. Maintenance</strong>
          </Col>
          
        </Row>

        <Row>
          <Col md={6}>
            <div>
                <br /><br /><br />
            <strong>VERTIV</strong><br /><br /><br />
            <strong>YOUR VISION, OUR PASSION</strong><br />
            Protecting your critical technologies requires more than just high-quality software and hardware. It takes a level of experience that can only be gained by devoting years to finding the solutions the industry needs most. We were the first to protect terminals with cooling systems. We were the first to offer an integrated cabinet system for distributed networks. We've helped the biggest names in the industry accelerate the implementation of new capabilities, at a reduced cost, as search tools and social networks increasingly demand more storage and computing capacity.
            </div>
          </Col>
         <Col md={6}>
            {/* Progress bars for services, competences, and results */}
            <br />  <br /> <br />  <br /> <br /> <br /> <br />
            <small>Services</small>
            <div className="progress">
              <div className="progress-bar" style={{ width: `${progress.services}%` }}>
                {progress.services}%
              </div>
            </div> <br />
            <small>SKILLS</small>
            <div className="progress">
              <div className="progress-bar" style={{ width: `${progress.competences}%` }}>
                {progress.competences}%
              </div>
            </div> <br />
            <small>Results</small>
            <div className="progress">
              <div className="progress-bar" style={{ width: `${progress.results}%` }}>
                {progress.results}%
              </div>
            </div>
          </Col>
          <Col>
          <div><br /><br />
          <button 
          className="btn btn-outline-secondary  divider-button float-left"
          style={{marginBottom: '20px'}}>
            Read More
        </button>
        </div>
        </Col>
        </Row>
       
      </Container>
    </div>
  );
};

export default Home;