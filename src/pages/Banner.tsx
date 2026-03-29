import { Card, CardBody, CardHeader, Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBus } from "@fortawesome/free-solid-svg-icons/faBus"
import { faUsersSlash } from "@fortawesome/free-solid-svg-icons/faUsersSlash"
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock"
import { faClipboardList } from "@fortawesome/free-solid-svg-icons/faClipboardList"
import trusted from "../assets/images/trusted.png"

const Banner = () => {
  return (
   <>
   <Container  className="d-flex-align-item-space-between">
   <div className="banner">

  <Card className="banner-card">

    <CardHeader className="banner-header">
      <h3 className="banner-title">
        <span className="highlight">Fast</span>Assured
      </h3>
      <img src={trusted} alt="logo" className="trust" />
    </CardHeader>
    
   <CardBody>
    <h4><FontAwesomeIcon icon={faBus} /> Bus Cancelled? </h4> 
    <p>150% Refund</p>
    <h4><FontAwesomeIcon icon={faUsersSlash} /> Bad service quality?</h4>
    <p>Upto 100% refund </p>
    <h4><FontAwesomeIcon icon={faClock} /> Bus delayed?</h4>
    <p>Upto 100% refund</p>
    <h4><FontAwesomeIcon icon={faClipboardList} />Changed your plans?</h4>
    <p>100% refund</p>
   </CardBody>
  </Card>

  <div><img src={trusted} alt="reload" /></div>
</div>
   </Container>
   </>
  )
}

export default Banner