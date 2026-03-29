import { Button, Col, Form, Modal, Row } from "react-bootstrap"

type Props = {
    show: boolean;
    onClose: () => void;
};

const Login = ({ show, onClose }: Props) => {
    return (
        <>
            <Modal show={show} onHide={onClose} centered size="xl">
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontWeight: "bold" }} className="w-100 text-center fw-bold"> Welcome to FastBus </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row md={6} xs={12}>
                        <Col md={6} xs={12} style={{ backgroundColor: "maroon" }}><span><h1 style={{ display: "inline", color: "tan" ,fontFamily: "ui-monospace" }}>Fast</h1></span>
                            <h1 style={{ display: "inline", color: "white" }}>Bus</h1>
                            <ul style={{color:"white"}}>
                                <li><strong>Fast Assured</strong> <p>Protect yourself with up to 150% refund in case of service cancellation</p></li>
                                <li><strong>Free Cancellation</strong> <p>Protect yourself from cancellation charges and get 100% refund</p></li>
                                <li><strong>4.8★ Rating</strong> <p>India's highest rated bus platform</p></li>
                                <li><strong>Trusted by 5+ Crore Happy Customers</strong></li>
                            </ul> </Col>
                        <Col md={6} xs={12}> 
                        <Form.Group className="mb-3">
                            <Form.Label>Enter Mobile Number to Continue</Form.Label>
                            <Form.Control
                                type="tel"
                                maxLength={10}
                                placeholder="Enter Mobile Number"
                            />
                            <Form.Label>Have a referral code?</Form.Label>
                             <Form.Control 
                             type="text" 
                             placeholder="Enter Referral Code if Available" /> 
                             </Form.Group>
                            <div className="d-flex justify-content-center">
                                <Button variant="danger" type="submit"> Login </Button>
                            </div>
                     
                            <div className="d-flex align-items-center my-3">
                                <div className="flex-grow-1 border-top"></div>
                                <span className="mx-2 text-muted">Or Continue With</span>
                                <div className="flex-grow-1 border-top"></div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Button variant="outline-danger" className="w-100"> Continue with Google </Button>
                            </div>
                            <p className="text-muted mt-3" style={{ fontSize: "0.85rem" }}> By logging in, I understand & agree to <strong>BlueBus</strong>
                                <a href="">terms of use </a> & <a href="">privacy policy</a></p>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Login

