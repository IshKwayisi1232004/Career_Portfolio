import {Container, Row, Col} from "react-bootstrap";
import logo from "../assets/PortfolioLogo.png";
import navIcon1 from "../assets/nav-icon1.svg";


export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6} className="text-center text-sm-end">
                        <img src={logo} alt="Logo"/>    
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <img src={navIcon1}/>
                        </div>
                        <p>CopyRight 2025. All rights Reserved by Ishmael Kwayisi</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}