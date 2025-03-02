import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import Users from "./Users";

const Sidebar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="light" onClick={handleShow}>
                Все пользователи 
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton className="border-primary-subtle bg-info">
                    <Offcanvas.Title className="text-light">Пользователи</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Users/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Sidebar;