import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaPhone, FaLocationDot, FaEnvelope, FaClock  } from 'react-icons/fa6';


const ContactUs = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [nameCheck, setNameCheck] = useState('Enter your name');
    const [emailCheck, setEmailCheck] = useState('Enter your email');

    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    const handleContactSubmit = (e) => {
        e.preventDefault();
        alert('functionality is in development phase, try to use social network or email to send message')
        const contactData = { name, email, subject, message };
        // dispatch(contactDataFun(contactData));
        console.log(contactData)
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    const onInputChange = (ip, type) => {
        if (type === 'name') {
            if (ip.length < 3 && ip.length !== 0) {
                setNameCheck('Name should be at least 3 characters long');
            } else {
                setNameCheck('Enter your name');
            }
            setName(ip);
        } else if (type === 'email') {
            const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (patt.test(ip) || ip.length === 0) {
                setEmailCheck('Enter your email');
            } else {
                setEmailCheck('Invalid email');
            }
            setEmail(ip);
        } else if (type === 'subject') {
            setSubject(ip);
        } else if (type === 'message') {
            setMessage(ip);
        } else {
            console.log('no ip')
        }
    }

    return (
        <section className="section contact">
            <h1 className="card-title text-center my-4">Contact Us</h1>
            <div className="row gy-4">

                <div className="col-lg-6">

                    <div className="row">
                        
                        <div className="col-sm-6 info-box card">
                            <h3><FaLocationDot /> Address</h3>
                            <p>Nagpur, India</p>
                        </div>
                        <div className="col-sm-6 info-box card">
                            <h3><FaPhone /> Call Us</h3>
                            <p><Link to='tel:+91 9637744229'>+91 9637744229</Link></p>
                        </div>
                    </div>
                    <div className="row">
                        
                        <div className="col-sm-6 info-box card">
                            <h3><FaEnvelope /> Call Us</h3>
                            <p><Link to='mailto:planet1@outlook.com'>mailto:planet1@outlook.com</Link></p>
                        </div>
                        <div className="col-sm-6 info-box card">
                            <h3><FaClock /> Open Hours</h3>
                            <p>Everyday: 9:00AM - 08:00PM</p>
                        </div>
                    </div>
                    {/* <div className="info-box card row">
                        <div className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                            <h3><FaLocationDot /> Address</h3>
                            <p>Nagpur, India</p>
                        </div>
                        <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-6'>
                            <h3><FaLocationDot /> Address</h3>
                            <p>Nagpur, India</p>
                        </div>
                    </div> */}

                </div>

                <div className="col-lg-6">
                    <div className="card p-4" style={{background: 'transparent', border: 'none'}}>
                        <form className="php-email-form" data-aos="fade-up" data-aos-delay="200" onSubmit={handleContactSubmit}>
                            <div className="row gy-4">
                                <div className="col-md-6">
                                    {(nameCheck.length < 16) ? <span style={{ display: 'none' }}>{nameCheck}</span> : <span style={{ display: 'block', color: '#ff7f7f' }}>{nameCheck}</span>}
                                    <input type="text" name="name" className="form-control" placeholder="Your Name" required onChange={(e) => onInputChange(e.target.value, 'name')} value={name} />
                                </div>
                                <div className="col-md-6 ">
                                    {(emailCheck.length > 15) ? <span style={{ display: 'none' }}>{emailCheck}</span> : <span style={{ display: 'block', color: '#ff7f7f' }}>{emailCheck}</span>}
                                    <input type="email" className="form-control" name="email" placeholder="Your Email" required onChange={(e) => onInputChange(e.target.value, 'email')} value={email} />
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control" name="subject" placeholder="Subject" required onChange={(e) => onInputChange(e.target.value, 'subject')} value={subject} />
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control" name="message" rows="2" placeholder="Message" required onChange={(e) => onInputChange(e.target.value, 'message')} value={message}></textarea>
                                </div>
                                <div className="col-12 text-center">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                    <button type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default ContactUs;
