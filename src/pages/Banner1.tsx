import { Col, Container, Row } from "react-bootstrap"

export const Banner1 = () => {
  return (
    <>
    <Container className="my-5"> 
        <div className="banner1">
        <Row className="h-100 align-items-center">
            <Col xs={12} md={6} style={{color:"black",backgroundColor:" rgba(255, 255, 255, 0.35)",borderRadius:"10px"}}>
              <h3 style={{fontWeight:"bold"}}>Track Your Bus Live Location</h3>
              <p>FastBus is solving the biggest concern while boarding a bus by providing a tracking option that provides the live location of the bus. This option keeps passengers informed about the bus live location so that passengers can plan their boarding accordingly. FastBus live bus tracking system allows you to track your bus status by entering your FastBus Booking ID and either Email ID or Mobile Number details in the input field box. It's a simple, fast, and secure way to manage, track your bus live location on Google Maps with  technology. Find scheduled bus departure and arrival times of your bus route, the distance between cities and more information. <br /><br/>

              Booking Bus tickets online in advance and reserving your seats also gives you benefits on early bird discount offers and help you to plan a hassle-free bus journey. Book bus tickets now and enjoy the live bus tracking status online with us.</p>
            </Col>
        </Row>
        </div>
    </Container>
    </>
  )
}
