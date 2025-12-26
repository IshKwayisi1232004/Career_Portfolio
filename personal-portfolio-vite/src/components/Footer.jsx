import {Container, Row, Col} from "react-bootstrap";
import logo from "../assets/PortfolioLogo.png";
import navIcon1 from "../assets/nav-icon1.svg";


export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo"/>    
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/ishmael-kwayisi/"><img src={navIcon1} alt="Icon"/></a>
                        </div>
                        <p>CopyRight 2025. All rights Reserved by Ishmael Kwayisi</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}