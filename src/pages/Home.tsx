import { useEffect, useRef, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightArrowLeft,
  faBus,
  faLocationArrow,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Discount from "./Discount";
import Srtcsection from "./Srtcsection";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner";
import Information from "./Information";
import TopPrivateTravels from "./TopPrivateTravels";
import { Banner1 } from "./Banner1";
import FAQ from "./FAQ";
import About from "./About";
import Knowmore from "./Knowmore";
import Footer from "./Footer";
import Banner2 from "./Banner2";

// --------------------
// City Data
// --------------------
const cities = [
  { city: "Chennai", state: "Tamil Nadu" },
  { city: "Chengalpattu", state: "Tamil Nadu" },
  { city: "Coimbatore", state: "Tamil Nadu" },
  { city: "Bangalore", state: "Karnataka" },
  { city: "Hyderabad", state: "Telangana" },
  { city: "Mumbai", state: "Maharashtra" },
  { city: "Goa", state: "Goa" },
  { city: "Nagercoil", state: "Tamil Nadu" },
  { city: "Kanyakumari", state: "Tamil Nadu" },
  { city: "Thoothukudi", state: "Tamil Nadu" },
  { city: "Tirunelveli", state: "Tamil Nadu" },
  { city: "Thenkasi", state: "Tamil Nadu" },
  { city: "Ambattur", state: "Tamil Nadu" },
  { city: "Erode", state: "Tamil Nadu" },
  { city: "Salem", state: "Tamil Nadu" },
  { city: "Hosur", state: "Tamil Nadu" },
  { city: "Madurai", state: "Tamil Nadu" },
  { city: "Trichy", state: "Tamil Nadu" },
  { city: "Trivandrum", state: "Kerala" },
  { city: "Kochi", state: "Kerala" },
  { city: "Munnar", state: "Kerala" },
  { city: "Ooty", state: "Tamil Nadu" },
  { city: "Kodaikanal", state: "Tamil Nadu" }
];

const Home = () => {

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [fromSearch, setFromSearch] = useState("");
  const [toSearch, setToSearch] = useState("");

  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);

  const [selectedDate, setSelectedDate] = useState("");


  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        fromRef.current &&
        !fromRef.current.contains(e.target as Node)
      ) {
        setShowFromDropdown(false);
      }

      if (
        toRef.current &&
        !toRef.current.contains(e.target as Node)
      ) {
        setShowToDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const filteredFromCities = cities.filter(
    (item) =>
      item.city
        .toLowerCase()
        .includes(fromSearch.toLowerCase()) &&
      item.city !== to
  );

  const filteredToCities = cities.filter(
    (item) =>
      item.city.toLowerCase().includes(toSearch.toLowerCase()) &&
      item.city !== from
  );

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  const handleToday = () => {
    const today = new Date();
    setSelectedDate(formatDate(today));
  };

  const handleTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setSelectedDate(formatDate(tomorrow));
  };

  const handleSearch = () => {
    navigate("/searchbus", {
      state: {
        from,
        to,
        date: selectedDate,
      },
    });
  };

  return (
    <>
    <div id="home">
      <div className="backgroundbus" >
        <Container className="background-b">
          {/* Header */}
          <Row className="text align-items-center">
            <Col xs="auto" className="bus-label">
              <FontAwesomeIcon icon={faBus} size="2x" />
              <span className="bus-text ms-2">Buses</span>
            </Col>
            <Col />
            <Col xs="auto">
              <div className="bus-text2">
                India's Fastest Bus Ticket Booking Platform
              </div>
            </Col>
          </Row>

          {/* Search Row */}
          <Row className="search-row g-2 m-2 position-relative">
            {/* FROM */}
            <Col xs={12} md={3} ref={fromRef} className="position-relative">
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faLocationDot} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="From Destination"
                  value={from}
                  onFocus={() => {
                    setShowFromDropdown(true);
                    setShowToDropdown(false);
                    setFromSearch(from);
                  }}
                  onChange={(e) => {
                    setFrom(e.target.value);
                    setFromSearch(e.target.value);
                  }}
                />
              </InputGroup>

              {showFromDropdown && (
                <div className="city-dropdown">
                  {filteredFromCities.length === 0 ? (
                    <div className="dropdown-item text-muted">
                      No cities found
                    </div>
                  ) : (
                    filteredFromCities.map((item, index) => (
                      <div
                        key={index}
                        className="dropdown-item"
                        onClick={() => {
                          setFrom(item.city);
                          setShowFromDropdown(false);
                        }}
                      >
                        <strong>{item.city}</strong>
                        <div className="state">{item.state}</div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </Col>

            {/* SWAP */}
            <Col xs="auto" className="swap-icon d-flex align-items-center">
              <FontAwesomeIcon
                icon={faArrowRightArrowLeft}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (from && to) {
                    setFrom(to);
                    setTo(from);
                  }
                }}
              />
            </Col>

            {/* TO */}
            <Col xs={12} md={3} ref={toRef} className="position-relative">
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faLocationArrow} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="To Destination"
                  value={to}
                  onFocus={() => {
                    setShowToDropdown(true);
                    setShowFromDropdown(false);
                    setToSearch(to);
                  }}
                  onChange={(e) => {
                    setTo(e.target.value);
                    setToSearch(e.target.value);
                  }}
                />
              </InputGroup>

              {showToDropdown && (
                <div className="city-dropdown">
                  {filteredToCities.length === 0 ? (
                    <div className="dropdown-item text-muted">
                      No cities found
                    </div>
                  ) : (
                    filteredToCities.map((item, index) => (
                      <div
                        key={index}
                        className="dropdown-item"
                        onClick={() => {
                          setTo(item.city);
                          setShowToDropdown(false);
                        }}
                      >
                        <strong>{item.city}</strong>
                        <div className="state">{item.state}</div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </Col>

            {/* DATE */}
            <Col xs={12} md={3}>
              <Form.Control
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </Col>

            {/* TODAY / TOMORROW */}
            <Col xs={12} md="auto" className="d-flex align-items-center">
              <Button variant="outline-danger" onClick={handleToday}>
                Today
              </Button>
              <Button
                variant="outline-danger"
                className="ms-2"
                onClick={handleTomorrow}
              >
                Tomorrow
              </Button>
            </Col>

            {/* SEARCH */}
            <Col xs={12} md="auto">
              <Button
                variant="danger"
                className="w-100"
                disabled={!from || !to || from === to}
                onClick={handleSearch}
              >
                Search
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
 </div>

      <div style={{ paddingTop: "90px" }}>
        <Discount />
      </div>

      <div style={{ paddingTop: "50px" }}>
        <Srtcsection />
      </div>

      <div style={{ paddingTop: "50px" }}>
        <Banner />
      </div>

      <div style={{ paddingTop: "50px" }}>
        <Information />
      </div>
     
     <div>
        <TopPrivateTravels />
      </div>

      <div>
        <Banner1/>
      </div>
    
      <div>
        <FAQ/>
      </div>

        <div>
        <Banner2/>
      </div>

       <div >
        <About/>
      </div>

        <div>
        <Knowmore/>
      </div>
   
       <div>
        <Footer/>
      </div>

    </>
  );
};

export default Home;
