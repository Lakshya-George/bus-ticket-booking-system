import { Container, Carousel, Row, Col } from "react-bootstrap";

import offer from "../assets/images/offer.jpg";
import offer1 from "../assets/images/offer1.jpg";
import offer2 from "../assets/images/offer2.png";
import offer3 from "../assets/images/offer3.jpg";
import offer4 from "../assets/images/offer4.jpg";
import offer5 from "../assets/images/offer5.png";
import offer6 from "../assets/images/offer6.png";
import offer7 from "../assets/images/offer7.jpg";
import offer8 from "../assets/images/offer8.webp";
import offer9 from "../assets/images/offer9.webp";
import offer10 from "../assets/images/offer10.png";

const offers = [
  offer, offer1, offer2,offer3,offer4,offer5,offer6,offer7,offer8,offer9,offer10,
];


const chunkArray = (arr: string[], size: number) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const Discount = () => {
  const slides = chunkArray(offers, 3);

  return (
    <div id="offer">
    <Container className="mt-4">
      <h4 className="fw-bold mb-3">Bus Booking Discount Offers</h4>

      <Carousel
        indicators={false}
        controls={true}
        interval={3000}
        touch
        wrap
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <Row className="g-3">
              {slide.map((img, i) => (
                <Col md={4} sm={6} xs={12} key={i}>
                  <img
                    src={img}
                    className="offer-img w-100"
                    alt="offer"
                  />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
    </div>
  );
};

export default Discount;
