import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
         
          <Col lg={12} className="text-center">
            
            <div className="social-icon">
           
              <a href="https://www.linkedin.com/in/poojan-patel-9a729a1a5/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/poojan-2099"><img src={navIcon2} alt="" /></a>
            
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
