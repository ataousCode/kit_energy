import {Container, Row, Col} from 'react-bootstrap';
import Footer from '../Footer';
import React from 'react';

const Climatization = () =>{

    return (
        <div>
            <Container>
                <Row>
                    <Col md={6}>
                        <h1>AIR CONDITIONER</h1>
                        <hr /> 
                        <p>
                        KIT est spécialiste de la climatisation de précision et de confort.
                        Vous avez un Datacenter, une salle informatique de pointe, une salle d’archivage de documents importants, contacter nous pour une solution durable et rentable.
                        En effet, KIT est distributeur officiel de VERTIV pour le cooling.
                        Nos équipements de pointe qui ont fait leur preuve partout dans le monde vous donnerons satisfaction.
                        Nous faisons du dimensionnement, de la fourniture, de l’installation et le maintenance des équipements Vertiv cooling UPS et DC Power.
                        Nous avons un staff formé par Emerson.
                        </p>

                        <img 
                        src='http://kit-energy.com/wp-content/uploads/2017/10/IMG-20171029-WA0016-150x150.jpg'
                        alt='first air conditioner' 
                        style={{marginTop: '50px'}}/><br /><br />
                        <img 
                        src='http://kit-energy.com/wp-content/uploads/2016/04/clima-150x150.jpg'
                        alt='second air conditioner'
                        style={{marginBottom: '20px'}}/><br />
                        <img 
                        src='http://kit-energy.com/wp-content/uploads/2017/10/20171028_132252-150x150.jpg' 
                        alt='third air conditioner'
                        style={{marginBottom: '50px'}}/><br />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Climatization;