import React from 'react'

const FAQ = () => {
    return (
        <section className="section faq" id='faq'>
            <h1 className="card-title text-center my-4">FAQ's</h1>
            <div className="card" style={{background:'transparent', border:'none'}}>
                <div className="card-body">

                    <div className="accordion accordion-flush" id="faq-group-2">

                        <div className="accordion-item" style={{background:'transparent'}} >
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-1" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    1. What services does Planet1 offer?
                                </button>
                            </h2>
                            <div id="faqsTwo-1" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    We provide end-to-end solutions for businesses, including website development from scratch, design, hosting, and content management. We also offer online product and post hosting services.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-2" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    2. How long does it take to build a website?
                                </button>
                            </h2>
                            <div id="faqsTwo-2" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    The timeline for building a website depends on the complexity and requirements. Typically, a standard website takes around 4–6 weeks to go from concept to launch.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-3" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    3. Can you redesign my existing website?
                                </button>
                            </h2>
                            <div id="faqsTwo-3" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    Yes, we offer redesign services to revamp and modernize your current website while keeping your brand identity intact.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-4" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    4. Do you offer hosting services?
                                </button>
                            </h2>
                            <div id="faqsTwo-4" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    Yes, we provide reliable and secure hosting services to ensure your website performs well and remains online 24/7.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-5" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    5. Can I update my website after it’s launched?
                                </button>
                            </h2>
                            <div id="faqsTwo-5" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    Absolutely! You’ll have access to an easy-to-use content management system (CMS) to make updates on your own, or you can reach out to us for assistance.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-6" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    6. Is there any support after the website is live?
                                </button>
                            </h2>
                            <div id="faqsTwo-6" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    Yes, we offer ongoing maintenance and support services to ensure your website remains up-to-date and secure.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-7" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    7. Do you provide SEO services?
                                </button>
                            </h2>
                            <div id="faqsTwo-7" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    Yes, we provide search engine optimization (SEO) services to help improve your website's visibility on search engines.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-8" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    8. What kind of businesses do you work with?
                                </button>
                            </h2>
                            <div id="faqsTwo-8" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    We work with businesses of all sizes, from startups to established companies, across various industries, including retail, education, healthcare, and more.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-9" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    9. How do I get started with Planet1?
                                </button>
                            </h2>
                            <div id="faqsTwo-9" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    Getting started is easy! Simply reach out to us through our contact form or call us, and we’ll schedule a consultation to discuss your website needs.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-10" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    10. What makes Planet1 different from other website providers?
                                </button>
                            </h2>
                            <div id="faqsTwo-10" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    At Planet1, we focus on delivering customized solutions tailored to your business. Our team ensures high-quality service and continuous support, offering end-to-end web development and hosting in one place.
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default FAQ;
