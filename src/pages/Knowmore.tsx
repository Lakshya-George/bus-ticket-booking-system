import { Container, Row, Col, Tab, Tabs, Nav } from "react-bootstrap";

const Knowmore = () => {
  return (
    <>
    <div className="knowmore">
    <Container className="know-more my-5">

      <Tabs
        defaultActiveKey="routes"
        className="custom-tabs mb-4"
      >
        <Tab eventKey="routes" title="Top Bus Routes">
          <Row>
            <Col md={3}>
              <ul>
                <li>Hyderabad to Bangalore Bus</li>
                <li>Vijayawada to Hyderabad Bus</li>
                <li>Chennai to Madurai Bus</li>
                <li>Mumbai to Ahmedabad Bus</li>
                <li>Ahmedabad to Rajkot Bus</li>
                <li>Jaipur to Ahmedabad Bus</li>
                <li>Delhi to Jaipur Bus</li>
              </ul>
            </Col>

            <Col md={3}>
              <ul>
                <li>Hyderabad to Vijayawada Bus</li>
                <li>Bangalore to Hyderabad Bus</li>
                <li>Chennai to Coimbatore Bus</li>
                <li>Indore to Bhopal Bus</li>
                <li>Ahmedabad to Indore Bus</li>
                <li>Delhi to Lucknow Bus</li>
              </ul>
            </Col>

            <Col md={3}>
              <ul>
                <li>Hyderabad to Mumbai Bus</li>
                <li>Bangalore to Chennai Bus</li>
                <li>Mumbai to Pune Bus</li>
                <li>Indore to Ahmedabad Bus</li>
                <li>Udaipur to Jaipur Bus</li>
                <li>Delhi to Gorakhpur Bus</li>
              </ul>
            </Col>

            <Col md={3}>
              <ul>
                <li>Vijayawada to Bangalore Bus</li>
                <li>Chennai to Bangalore Bus</li>
                <li>Mumbai to Hyderabad Bus</li>
                <li>Ahmedabad to Jaipur Bus</li>
                <li>Jaipur to Delhi Bus</li>
                <li>Delhi to Shimla Bus</li>
              </ul>
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="cities" title="Buses From Top Cities">
            <Row>
            <Col md={3}>
              <ul>
                <li>Hyderabad Bus Tickets</li>
                <li>Vijayawada  Bus Tickets</li>
                <li>Chennai  Bus Tickets</li>
                <li>Mumbai Bus Tickets</li>
                <li>Ahmedabad Bus Tickets</li>
                <li>Jaipur  Bus Tickets</li>
              </ul>
            </Col>

            <Col md={3}>
              <ul>
                <li>Goa  Bus Tickets</li>
                <li>Bangalore  Bus Tickets</li>
                <li>Coimbatore  Bus Tickets</li>
                <li>Bhopal  Bus Tickets</li>
                <li>Indore  Bus Tickets</li>
                 <li>Delhi  Bus Tickets</li>
              </ul>
            </Col>

            <Col md={3}>
              <ul>
                <li>Shimla  Bus Tickets</li>
                <li>Lucknow  Bus Tickets</li>
                <li>Bopal  Bus Tickets</li>
                <li>Bellary  Bus Tickets</li>
                <li>Udaipur  Bus Tickets</li>
                <li>Gorakhpur Bus Tickets</li>
              </ul>
            </Col>

            <Col md={3}>
              <ul>
                <li>Tirpathi  Bus Tickets</li>
                <li>Jodhpur  Bus Tickets</li>
                <li>Surat  Bus Tickets</li>
                <li>Chandigarh  Bus Tickets</li>
                <li>Manali  Bus Tickets</li>
                <li>Kochi  Bus Tickets</li>
              </ul>
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="rtc" title="Top RTC Buses">
         <Row>
            <Col md={3}>
              <ul>
                <li>APSRTC</li>
                <li>HRTC</li>
                <li>GSRTC</li>
                <li>BSRTC</li>
                <li>KTCL</li>
              </ul>
            </Col>

            <Col md={3}>
              <ul>
                <li>SNT</li>
                <li>TNSRTC</li>
                <li>RSRTC</li>
                <li>PRTC</li>
                <li>UTC</li>
              </ul>
            </Col>

            <Col md={3}>
              <ul>
                <li>GSRTC</li>
                <li>OSRTC</li>
                <li>JKSRTC</li>
                <li>MTC</li>
              </ul>
            </Col>

            <Col md={3}>
              <ul>
                <li>Kerala RTC</li>
                <li>UPSRTC</li>
                <li>WBTC</li>
                <li>SBSTC</li>
              </ul>
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="services" title="Top Bus Services">
           <Row>
            <Col md={3}>
              <ul>
                <li>Orange Tours and Travels</li>
                <li>Dashmesh Travels</li>
                <li>Intercity Travels</li>
                <li>SRS Travels</li>
                <li>Raj Ratan Travels</li>
                <li>Patel Travels</li>
              </ul>
            </Col>

            <Col md={3}>
              <ul>
                <li>Mahalaxmi Travels</li>
                <li>Srinanth  Travels</li>
                <li>Morning Star Travels</li>
                <li>Royal Safari Travels</li>
                <li>Zing  Bus Travels</li>
                <li>Greenline Travels</li>
              </ul>
            </Col>

            <Col md={3}>
              <ul>
                <li>Dolphin Travels</li>
                <li>Kanker Travels</li>
                <li>Hans Travels</li>
                <li>Sri Krishna Travels</li>
                <li>M.R Travels</li>
                <li>YBM Travels</li>
              </ul>
            </Col>

            <Col md={3}>
              <ul>
                <li>VRL Travels</li>
                <li>Gujarat Travels</li>
                <li>KalpanaTravels</li>
                <li>Jakhar Travels</li>
                <li>V Kaveri Travels</li>
                <li>Swamy Ayyappa Travels</li>
              </ul>
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="links" title="Quick Links">
           <Row>
            <Col md={3}>
              <ul>
                <li>Bus Ticket Booking</li>
                <li>Cancel Booking</li>
                <li>FastBus Booking</li>
              </ul>
            </Col>

            <Col md={3}>
              <ul>
                <li>Bus Booking Offers</li>
                <li>Refer a Friend</li>
                <li>Bus ixigo Booking</li>
            </ul>
            </Col>

            <Col md={3}>
              <ul>
                <li>Check Bus Status</li>
                <li>SiteMaps</li>
                <li>News</li>
              </ul>
            </Col>

            <Col md={3}>
              <ul>
                <li>Live Bus Tracking</li>
                <li>Fast Assured</li>
                <li>SRTC Directory</li>
              </ul>
            </Col>
          </Row>
        </Tab>
      </Tabs>
     <hr/>
    
     <Nav >
      <Nav.Item as="li">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="#offer">Offer</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="#about">About</Nav.Link>
      </Nav.Item>
         <Nav.Item as="li">
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav.Item>
         <Nav.Item as="li">
        <Nav.Link href="#faq">FAQ's</Nav.Link>
      </Nav.Item>
         <Nav.Item as="li">
        <Nav.Link href="#terms">Terms</Nav.Link>
      </Nav.Item>
         <Nav.Item as="li">
        <Nav.Link >Privacy</Nav.Link>
      </Nav.Item>
    </Nav>
  
    </Container>
    </div>
    </>
  )
}

export default Knowmore;
