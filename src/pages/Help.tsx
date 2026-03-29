import { Button, Col, Form, Modal, Row } from "react-bootstrap";

type Props = {
    show: boolean;
    onClose: () => void;
};

const Help = ({ show, onClose }: Props) => {
    return (
        <div id="contact">
        <Modal show={show} onHide={onClose} centered size="lg">
            <Modal.Header closeButton />

            <Modal.Body className="p-0">
                <Row className="g-0 h-100">

                    <Col
                        md={6}
                        xs={12}
                        className="d-flex flex-column p-4"
                        style={{ backgroundColor: "maroon" }}
                    >
                        <h2 className="mb-0">
                            <span style={{ color: "tan", fontFamily: "ui-monospace" }}>
                                Fast
                            </span>
                            <span className="text-white">Bus</span>
                        </h2>

                        <h4 className="text-white mt-3">Happy To Help</h4>
                        <h6 className="text-white mb-3">
                            24/7 chat support for faster query resolution
                        </h6>

                        <ul className="text-white ps-3">
                            <li>Login Bookings – Enter Account Mobile Number</li>
                            <li>Guest Booking – Enter Booking Mobile Number</li>
                        </ul>
                    </Col>

                    <Col md={6} xs={12} className="p-4">
                        <h3>Login To FastBus</h3>


                        <Form.Group className="mb-3">
                            <Form.Label>Enter Mobile Number to Continue</Form.Label>
                            <Form.Control
                                type="tel"
                                maxLength={10}
                                placeholder="Enter Mobile Number"
                              
                            />
                        </Form.Group>
                        <div className="text-center">
                            <Button variant="danger">Login</Button>
                        </div>
                  

                    <div className="d-flex align-items-center my-3">
                        <div className="flex-grow-1 border-top"></div>
                        <span className="mx-2 text-muted">Or Continue With</span>
                        <div className="flex-grow-1 border-top"></div>
                    </div>

                    <Button variant="outline-danger" className="w-100">
                        Continue with Google
                    </Button>

                    <p className="text-muted mt-3" style={{ fontSize: "0.85rem" }}>
                        By logging in, I understand & agree to{" "}
                        <strong>FastBus</strong>{" "}
                        <a href="#">terms of use</a> &{" "}
                        <a href="#">privacy policy</a>
                    </p>
                </Col>
            </Row>
        </Modal.Body>
    </Modal >
    </div>
  );
};

export default Help;
