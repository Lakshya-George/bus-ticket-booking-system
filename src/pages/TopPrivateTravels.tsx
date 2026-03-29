import { Container, Row, Col } from "react-bootstrap";

import freshbus from "../assets/images/FreshBus.webp";
import zingbus from "../assets/images/Zingbus.jpg";
import flixbus from "../assets/images/flixbus.jpg";
import shyamoli from "../assets/images/shyamoli.webp";
import intercity from "../assets/images/intercity.jpg";

const TopPrivateTravels = () => {
  const travels = [
    {
      img: freshbus,
      url: "https://www.freshbus.com",
      name: "FreshBus",
    },
    {
      img: zingbus,
      url: "https://www.zingbus.com",
      name: "Zingbus",
    },
    {
      img: flixbus,
      url: "https://www.flixbus.com",
      name: "FlixBus",
    },
    {
      img: intercity,
      url: "https://www.intrcity.com",
      name: "Intercity",
    },
    {
      img: shyamoli,
      url: "https://www.shyamolibus.com",
      name: "Shyamoli",
    },
  ];

  return (
    <Container className="my-5">
      <h3 className="fw-bolder mb-4">Top Private Travels</h3>

      <Row className="justify-content-between align-items-center g-4">
        {travels.map((item, index) => (
          <Col key={index} xs={6} md={2} className="text-center">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.img}
                alt={item.name}
                className="travel-logo"
              />
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TopPrivateTravels;
