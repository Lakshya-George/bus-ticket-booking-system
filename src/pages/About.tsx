import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div id="about">
    <Container className="my-5">
      <Row >
        <Col md={12} xs={3} >
          <h3 className="fw-bold mb-4">
            About Fastbus <br />
            FastBus - India's Top Rated Bus Booking Platform
          </h3>

          <p>
            FastBus, over the years, has strived to deliver easy booking solutions to its customers. Our continued efforts have resulted in FastBus becoming one of the leading and top-rated bus bookingplatforms in India for various Bus services. We have a strong
            presence with a ticket inventory from over 6200 bus partners and
            650000 route options on our app and website.
          </p>

          <p>
            Founded in the year 2008, FastBus is a pioneer in providing
            end-to-end software and other value-added solutions such as
            e-ticketing systems, fleet management solutions, vehicle tracking
            systems, passenger information systems, and logistics management
            backed by a 24x7 customer support center.
          </p>

          <p>
            Today, FastBus proudly serves as the preferred Information
            Technology Partner for State Transport Corporations and Private
            Bus Fleet Bus Partners. We take immense pride in being an ISO
            9001:2008 certified company, reflecting our commitment to
            maintaining exceptional quality standards.
          </p>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default About;

