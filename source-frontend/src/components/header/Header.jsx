import { Container, Navbar } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "./Header.css";

const Header = () => {
    return (
        <div className="header-container">
            <Container>
                <Navbar>
                    <Sidebar />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className="navbar-text">
                            Никнейм мой
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;