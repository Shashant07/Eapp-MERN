import { Link } from 'react-router-dom';
import { FaPhone, FaLocationDot, FaEnvelope, FaYoutube, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa6';



const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-distributed">

      <div className="footer-left">

        <h3 className='logo'><img src='p1-logo.png' alt='planet1' /><span>Planet1</span></h3>

        <p className="footer-links">
          <Link to="/" className="link-1">Home</Link>

          {/* <Link to="#">Blog</Link> */}

          {/* <Link to="#">Pricing</Link> */}

          <Link to="/about">About</Link>

          <Link to="/faq">Faq</Link>

          <Link to="/contact">Contact</Link>
        </p>

        <p className="footer-company-name">Planet1 &copy; {currentYear}</p>
      </div>

      <div className="footer-center">

        <div>
          <FaLocationDot />
          <p className='footer-address-icons'>Nagpur</p>
        </div>

        <div>
          <FaPhone />
          <p className='footer-address-icons'><Link to="tel:+91 9637744229">+91 9637744229</Link></p>
        </div>

        <div>
          <FaEnvelope />
          <p className='footer-address-icons'><Link to="mailto:support@company.com">support@company.com</Link></p>
        </div>

      </div>

      <div className="footer-right">

        <p className="footer-company-about">
          <span>Empowering your digital journey</span>
          Connect with us to build your digital presence and explore our solutions.
        </p>

        <div className="footer-icons">

          <Link to="#">
            <FaFacebook />
          </Link>
          <Link to="https://www.instagram.com/planet1.official" target="_blank">
            <FaInstagram />
          </Link>
          <Link to="https://www.youtube.com/@planet1.official" target="_blank">
            <FaYoutube />
          </Link>
          <Link to="https://wa.me/9637744229?" target="_blank">
            <FaWhatsapp />
          </Link>

        </div>

      </div>

    </footer>
  )
};
export default Footer;
