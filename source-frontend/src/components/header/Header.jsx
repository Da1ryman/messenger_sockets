import { Container, Navbar } from "react-bootstrap"
import Sidebar from "./Sidebar";

const Header = () => {
    return (
        <div className="border-bottom border-primary-subtle bg-info">
            <Container>
                <Navbar>
                    <Sidebar/>
                    <Navbar.Collapse className="justify-content-end ">
                        <Navbar.Text className="text-light">
                            Никнейм мой
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </Container>           
        </div>
        
    )
}

export default Header;