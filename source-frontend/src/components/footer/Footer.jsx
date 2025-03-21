import { Container, Navbar } from "react-bootstrap";
import InputMessage from "./InputMessage";
import "./Footer.css";

const Footer = () => {
    return (
        <Container fluid className="footer-container">
            <Navbar className="footer-navbar">
                <InputMessage />
            </Navbar>
        </Container>
    );
};

export default Footer;