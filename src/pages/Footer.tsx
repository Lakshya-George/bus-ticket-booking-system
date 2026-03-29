import { faSquareFacebook, faSquareInstagram, faSquareLinkedin, faSquareXTwitter, faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="d-flex justify-content-between align-items-center">
        
        <div>
          FastBus | ixigo | Confirm Tkt © 2025 Le Travenues Technology Ltd. India.
          All brands are trademarks of their respective owners ·
          <span> Privacy</span> ·
          <span> Terms of Use</span> ·
          <span> Career</span> ·
          <span> Customer Service</span>
        </div>

        
         <button className="social-btn"><FontAwesomeIcon icon={faSquareInstagram} /></button>
          <button className="social-btn"><FontAwesomeIcon icon={faSquareXTwitter} /></button>
          <button className="social-btn"><FontAwesomeIcon icon={faSquareFacebook} /></button>
          <button className="social-btn"><FontAwesomeIcon icon={faSquareLinkedin} /></button>
          <button className="social-btn"><FontAwesomeIcon icon={faSquareYoutube} /> </button>

      </Container>
    </footer>
  );
};

export default Footer;
