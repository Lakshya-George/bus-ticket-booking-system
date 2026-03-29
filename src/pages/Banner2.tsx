import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

const Banner2 = () => {

  const Counter = ({ value }: { value: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const timer = setInterval(() => {
        start += value / 100;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 20);

      return () => clearInterval(timer);
    }, [value]);

    const format = (num: number) => {
      if (num >= 10000000) return (num / 10000000).toFixed(1) + "Cr+";
      if (num >= 100000) return (num / 100000).toFixed(1) + "L+";
      return Math.floor(num) + "+";
    };

    return <h2 className="counter">{format(count)}</h2>;
  };

  return (
    <Container className="banner2">
      <Row className="text-center align-items-center h-100 ">

        <Col xs={6} md={3}>
          <p>Bus routes across India</p>
          <Counter value={650000} />
        </Col>

        <Col xs={6} md={3}>
          <p>Bus partners</p>
          <Counter value={6200} />
        </Col>

        <Col xs={6} md={3}>
          <p>Trusted travellers</p>
          <Counter value={50000000} />
        </Col>

        <Col xs={6} md={3}>
          <p>Buses with discounts</p>
          <Counter value={100000} />
        </Col>

      </Row>
    </Container>
  );
};

export default Banner2;
