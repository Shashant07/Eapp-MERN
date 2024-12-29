import React from 'react';


const Services = () => {
    return (
        <section className="section services">
            <h1 className="card-title text-center my-4" >Our Services</h1>

            
            <div className="card" style={{background:'transparent', border:'none'}}>
                <div className="card-body" >

                    <div className="row accordion accordion-flush" id="services-group-2" >

                        <div className="accordion-item col-lg-6"  style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#servicessTwo-1" type="button" data-bs-toggle="collapse" style={{ margin: '10px 0', borderRadius: '10px',background:'#fff'}}>
                                    <img src='images/services1.png' alt='services' style={{maxHeight: '100px', margin: '0 10px', borderRadius:'10px'}}/><h5>1. Custom Website Development <br /><span style={{fontSize: 'medium', color: '#444444'}}>Tailored websites that reflect your brand and vision.</span></h5>
                                </button>
                            </h2>
                            <div id="servicessTwo-1" className="accordion-collapse collapse" data-bs-parent="#services-group-2">
                                <div className="accordion-body">
                                We create fully customized websites from scratch, ensuring a unique design, seamless user experience, and responsive features that align with your business needs.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item col-lg-6"  style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#servicessTwo-2" type="button" data-bs-toggle="collapse"  style={{ margin: '10px 0', borderRadius: '10px', background:'#fff'}}>
                                <img src='images/services2.png' alt='services' style={{maxHeight: '100px', margin: '0 10px', borderRadius:'10px'}}/><h5>2. E-Commerce Solutions <br /><span style={{fontSize: 'medium', color: '#444444'}}>Build and manage your online store with ease.</span></h5>

                                </button>
                            </h2>
                            <div id="servicessTwo-2" className="accordion-collapse collapse" data-bs-parent="#services-group-2">
                                <div className="accordion-body">
                                We specialize in developing secure, user-friendly e-commerce platforms with integrated payment gateways, product catalogs, and shopping carts.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item col-lg-6" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#servicessTwo-3" type="button" data-bs-toggle="collapse" style={{ margin: '10px 0', borderRadius: '10px', background:'#fff'}}>
                                <img src='images/services3.png' alt='services' style={{maxHeight: '100px', margin: '0 10px', borderRadius:'10px'}}/><h5>3. Website Hosting & Maintenance Support<br /><span style={{fontSize: 'medium', color: '#444444'}}>Reliable and secure hosting to keep your website running smoothly.</span></h5>

                                </button>
                            </h2>
                            <div id="servicessTwo-3" className="accordion-collapse collapse" data-bs-parent="#services-group-2">
                                <div className="accordion-body">
                                Our support on hosting services provide fast, secure uptime, along with continuous maintenance to ensure your site is always up-to-date and performing optimally.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item col-lg-6" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#servicessTwo-4" type="button" data-bs-toggle="collapse" style={{ margin: '10px 0', borderRadius: '10px', background:'#fff'}}>
                                <img src='images/services4.png' alt='services' style={{maxHeight: '100px', margin: '0 10px', borderRadius:'10px'}}/><h5>4. Search Engine Optimization (SEO) <br /><span style={{fontSize: 'medium', color: '#444444'}}>Improve your website's search engine ranking and visibility.</span></h5>

                                </button>
                            </h2>
                            <div id="servicessTwo-4" className="accordion-collapse collapse" data-bs-parent="#services-group-2">
                                <div className="accordion-body">
                                We optimize your website for search engines to boost visibility, enhance keyword rankings, and drive more organic traffic.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item col-lg-6" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#servicessTwo-5" type="button" data-bs-toggle="collapse" style={{ margin: '10px 0', borderRadius: '10px', background:'#fff'}}>
                                <img src='images/services5.png' alt='services' style={{maxHeight: '100px', margin: '0 10px', borderRadius:'10px'}}/><h5>5. Mobile-Responsive Design <br /><span style={{fontSize: 'medium', color: '#444444'}}>Ensure your website looks great on any device.</span></h5>

                                </button>
                            </h2>
                            <div id="servicessTwo-5" className="accordion-collapse collapse" data-bs-parent="#services-group-2">
                                <div className="accordion-body">
                                We design websites that automatically adjust to all screen sizes, ensuring an excellent user experience on desktops, tablets, and smartphones.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item col-lg-6" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#servicessTwo-6" type="button" data-bs-toggle="collapse" style={{ margin: '10px 0', borderRadius: '10px', background:'#fff'}}>
                                <img src='images/services6.png' alt='services' style={{maxHeight: '100px', margin: '0 10px', borderRadius:'10px'}}/><h5>6. Brand Strategy & Consultation <br /><span style={{fontSize: 'medium', color: '#444444'}}>Build a brand identity that resonates with your audience.</span></h5>

                                </button>
                            </h2>
                            <div id="servicessTwo-6" className="accordion-collapse collapse" data-bs-parent="#services-group-2">
                                <div className="accordion-body">
                                We provide expert consultation to help you define and enhance your brand, including logo design, messaging, and online positioning.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services;
