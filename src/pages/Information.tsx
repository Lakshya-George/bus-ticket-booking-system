import { Col, Container, Row } from "react-bootstrap";
import busbooking from "../assets/images/busbooking.webp";
import busbooking2 from "../assets/images/busbooking2.webp";
import busbooking3 from "../assets/images/busbooking3.jpg";

const Information = () => {
  return (
    <div id="terms">
    <Container className="info-section">
      <h3 className="fw-bold">Online Bus Booking Services</h3>

      <Row className="align-items-center">
       
        <Col xs={12} md={6}>
          <p className="info-text">
            FastBus is India`s leading online bus ticket booking service provider.
            Check out budget friendly offers and save big with discount coupons
            to book bus tickets at the lowest price with us. You can check the
            bus schedules, compare prices, and find all the information you need
            to plan an ideal and comfortable bus or train journey.
            <br /><br />
            FastBus has simplified the online bus booking process for your travel
            planning. In case you need to cancel the ticket or change the dates,
            you can save both time and money by choosing FastCash as a refund
            option which can be used instantly. Book now!!!
            <br /><br />
            Browse through all your bus route options, and use our advanced smart
            filters to ensure a reliable and comfortable journey, tailored to
            your scheduled travel plans.
          </p>
        </Col>

        <Col xs={12} md={6} className="text-center">
          <img
            src={busbooking}
            alt="bus booking"
            className="info-image"
          />
        </Col>
      </Row> <br />
      
      <h3 className="info-title">Benefits of Booking Bus Tickets Online</h3>
      <p className="info-text">
      In this day and age of technology, offline modes of bus ticket booking are no longer preferred. Online ticket booking is easy, fast, and hassle-free. FastBus ticks off all the three with user-friendly app and website navigation.Booking bus tickets online with FastBus has resolved many issues that people encounter while booking tickets at offline counters or through travel agents. Download the FastBus App to experience the benefits of bus ticket booking online.</p>

      <Row className="align-items-center">
      <Col xs={12} md={6} className="text-center">
       <img src={busbooking2} alt="bus booking" className="info-image" />
      </Col>
      <Col>
      <p className="info-text">
       Here is a list of all the benefits of booking bus tickets online on FastBus:
       <ul><li>Avoid standing in long queues at offline bus ticket counters.</li>
       <li>No more hassle of approaching travel agents.</li>
       <li>Choose from multiple bus services.</li>
       <li>Book both Private and SRTC bus tickets online.</li>
       <li>Check bus ticket availability online.</li>
       <li>Get bus timings, ticket price, boarding & dropping point details online.</li> <br /><br />
       <li>Access to payment partner discounts and cashback offers.</li>
       <li>Free Cancellation - Get 100% refund if your plan changes and you cancel your ticket.</li>
       <li>24/7 customer support.</li>
       <li>Each and every transaction is simple, safe and secure.</li></ul>
      </p>
      </Col>
      </Row> <br />
     
     <h3 className="info-title">How to Book Bus Tickets Online on FastBus</h3>
     <p className="info-text"> 
        Each and every booking or transaction you do on the FastBus website is simple, safe & secure. You can complete your booking process from the best bus booking website FastBus.com by following the steps mentioned below.</p>
        
      <Row className="align-items-center">
        <Col>
        <p className="info-text"><ul>
            <li>Enter the Origin city and Destination city details in the “leaving from” and “Going to” fields respectively</li>
            <li>Select the “Journey date” from calendar icon and click on the “Search” button</li>
            <li>Select any bus operator of your choice from the list of buses which are displayed buses</li>
            <li>Select a seat, boarding and dropping points and hit “Continue to payment”</li>
            <li>Enter all the required information including contact number & passenger details</li>
            <li>Complete the payment process by selecting your preferred mode of payment</li></ul>
            Once the payment process is done, you will receive an M-ticket on your mobile via SMS, whatsapp message and an e-ticket on email ID provided at “Enter Contact Details” field.</p>
        </Col>
        <Col xs={12} md={6} className="text-center">
        <img src={busbooking3} alt="bus booking"  className="info-image" />
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Information;
