import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faUser } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Container, Row } from "react-bootstrap";
import trusted from "../assets/images/trusted.png";

type Props = {
  onLoginClick: () => void;
  onHelpClick: () => void;
};

const Header =({ onLoginClick,onHelpClick }: Props)=> {
 
  return (
    <header className="global-header">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="logo">
              <span className="texted">Fast</span>Bus
            </h2>
            <img src={trusted} alt="logo" className="trust" />
          </Col>

          <Col md={6} className="text-end">
            <Button variant="outline-light" size="sm" className="me-2" onClick={onHelpClick}>
              <FontAwesomeIcon icon={faHeadset} /> Need Help?
            </Button>

            <Button variant="light" size="sm" onClick={onLoginClick}> 
              <FontAwesomeIcon icon={faUser} /> Login/Signup
            </Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
