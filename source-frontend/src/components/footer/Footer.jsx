import { Container, Navbar } from "react-bootstrap";
import InputMessage from "./InputMessage";

const Footer = () => {
    return (

        <Container className="bg-info w-100">
            <Navbar>
                <InputMessage/>
            </Navbar>
        </Container>    

    )
}

export default Footer;