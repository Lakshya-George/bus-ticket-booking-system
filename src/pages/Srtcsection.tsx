   import { Container, Row, Col, Button, Card } from "react-bootstrap";
   import APSRTC from "../assets/images/APSRTC.jpg";
   import TLSRTC from "../assets/images/TLSRTC.jpeg";
   import KLSRTC from "../assets/images/KLSRTC.jpg";
   import GRSRTC from "../assets/images/GRSRTC.jpg";
   import TNSRTC from "../assets/images/TNSRTC.jpeg";
   import KRSTC from "../assets/images/KRSTC.jpg";
   import DLSRTC from "../assets/images/DLSRTC.jpeg";
   import JKSRTC from "../assets/images/JKSRTC.webp";
   import KTSRTC from "../assets/images/KTSRTC.jpg";
   import MHSRTC from "../assets/images/MHSRTC.avif";
   import MGSRTC from "../assets/images/MGSRTC.png";

const srtcData = [
    {
    code: "TNSRTC",
    name: "Tamil Nadu State Road Transport Corporation",
    image: TNSRTC,  
},
  {
    code: "KRSRTC",
    name: "Karnataka State Road Transport Corporation",
    image: KRSTC,  
},
  {
    code: "APSRTC",
    name: "Andhra Pradesh State Road Transport Corporation",
    image: APSRTC,  
},
  {
    code: "TLSRTC",
    name: "Telangana State Road Transport Corporation",
    image: TLSRTC,
  },
  {
    code: "KSRTC",
    name: "Kerala Road Transport Corporation",
    image: KLSRTC,
  },
    {
    code: "DLSRTC",
    name: "Delhi Union Territory Transport Corporation",
    image: DLSRTC,  
},
  {
    code: "JKSRTC",
    name: "Jammu & Kashmir Unnion Territory Transport Corporation",
    image: JKSRTC,  
},
  {
    code: "APSRTC",
    name: "Andhra Pradesh State Road Transport Corporation",
    image: APSRTC,  
},
  {
    code: "GSRTC",
    name: "Gujarat State Road Transport Corporation",
    image: GRSRTC,
  },
    {
    code: "KTSRTC",
    name: "Kolkata State Road Transport Corporation",
    image: KTSRTC,  
},
  {
    code: "MGSRTC",
    name: "Meghalaya State Road Transport Corporation",
    image: MGSRTC,  
},
  {
    code: "MHSRTC",
    name: "Maharashtra State Road Transport Corporation",
    image: MHSRTC,  
},
];

const Srtcsection = () => {
  return (
    <>
    <Container>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h4>Book Bus Tickets at FastBus</h4>
          <p className="text-muted">
            From SRTC (State Road Transport Corporation)
          </p>
        </div>

        <Button variant="link" className="text-danger">
          View All SRTCs
        </Button>
      </div>

      <Row>
        {srtcData.map((item, index) => (
          <Col md={3} sm={6} xs={12} key={index} className="mb-4">
            <Card className="srtc-card">
              <Card.Img src={item.image} className="srtc-img" />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end text-white">
                <h5>{item.code}</h5>
                <p className="small">{item.name}</p>
                <Button size="sm" variant="outline-light">
                  Book Now
                </Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

   </>
  )
}

export default Srtcsection