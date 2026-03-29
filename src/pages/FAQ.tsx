
import { Accordion, Container, Nav } from "react-bootstrap";

const FAQ = () => {
    return (
        <div id="faq">
        <Container className="my-5">
            <h3 className="faq-title">Online Bus Booking FAQ's</h3>

            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0" >
                    <Accordion.Header className="faq-header">
                        Q. How do you do online bus reservation on FastBus?
                    </Accordion.Header>
                    <Accordion.Body>
                        Ans: Booking a bus ticket online in India is easy with FASTBUS.
                        Simply enter the Leaving from (Origin City) - Going to
                        (destination city) details along with the date you wish to
                        travel in the bus search option on the site. Within seconds
                        you will be given a list of available running buses for your
                        route. Select the bus that best suits you, then just follow
                        the bus ticket booking process by selecting your seat,
                        providing passenger details and completing the payment
                        process. Upon successful booking confirmation, you will
                        receive an e-ticket over SMS/WhatsApp and email.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header  className="faq-header" style={{fontWeight:"bold"}}>
                        Q. Do I need to create an account to book bus tickets on FastBus?
                    </Accordion.Header>
                    <Accordion.Body>
                        Ans: No, you can book bus tickets as a guest user by providing required passenger details. However, we recommend you to create an account so that you get the latest information about bus availability, ticket details and other features which will help you book faster during future transactions.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" >
                    <Accordion.Header  className="faq-header">
                        Q. How to sign-up FastBus?
                    </Accordion.Header>
                    <Accordion.Body>
                        Ans: You can sign up using your mobile number or email ID and
                        verify it via OTP.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header  className="faq-header">
                        Q. Can I book Government SRTC bus tickets on FastBus?
                    </Accordion.Header>
                    <Accordion.Body>
                        Ans: Yes, you can book SRTC (State Road Transport Corporation) bus tickets using our website or mobile app. Some of the major SRTC includes.
                       <ul>
                        <li>APSRTC - Andhra Pradesh State Road Transport Corporation</li>
                        <li>TGSRTC - Telangana State Road Transport Corporation</li>
                        <li>GSRTC - Gujarat State Road Transport Corporation</li>
                       <li> HRTC - Himachal Road Transport Corporation</li>
                        <li>MSRTC - Maharashtra State Road Transport Corporation</li>
                        <li>RSRTC - Rajasthan State Road Transport Corporation</li>
                        <li>MSRTC - Maharashtra State Road Transport Corporation</li>
                        <li>PRTC - Puducherry Road Transport Corporation</li>
                       <li> BSRTC - Bihar State Road Transport Corporation</li>
                        <li>UPSRTC - Uttar Pradesh State Road Transport Corporation</li>
                        <li>OSRTC - Odisha State Road Transport Corporation</li>
                        <li>Kerala RTC -Kerala State Road Transportation Corporation</li></ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div className="text-end mt-3">
               <Nav.Link href="#features" className="view-all">View all FAQ's</Nav.Link>
            </div>
        </Container>
        </div>
    );
};

export default FAQ;
