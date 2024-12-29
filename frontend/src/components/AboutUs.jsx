import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';


const AboutUs = () => {
    return (
        <>
            
                <h1 className="card-title text-center my-4">About Us</h1>


                <Card style={{ padding: '20px', background:'transparent', border: 'none' }}>
                <Row>
                    <Col lg={6} className='my-2'>
                        <Image src='images/aboutUs2.png' alt='about us' fluid className='about-us-img' style={{ borderRadius: '10px' }} />
                    </Col>
                    <Col lg={6} className='my-2'>
                        <h1>Who We Are</h1>
                        <h4>Creating Digital Experiences That Inspire</h4>
                        <p>At Planet1, we’re more than just a web services company—we’re your partners in creating meaningful online experiences. Founded with the vision to empower businesses, we specialize in crafting custom websites, e-commerce platforms, and digital solutions tailored to your unique needs.</p>
                        <p>With a dedicated team of designers, developers, and strategists, we bring creativity and expertise to every project. Committed to quality and innovation, we help startups, growing businesses, and established brands make their mark online.</p>
                        <p>At Planet1, we believe in building trust through transparency, delivering results, and fostering long-term relationships with our clients. Let us help you turn your digital dreams into reality.</p>
                    </Col>
                    </Row>
                </Card>
            
        </>
    )
}

export default AboutUs;