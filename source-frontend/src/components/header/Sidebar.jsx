import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import Users from "./Users";
import "./Sidebar.css";

const Sidebar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" className="sidebar-button" onClick={handleShow}>
                Все пользователи
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton className="offcanvas-header">
                    <Offcanvas.Title className="offcanvas-title">Пользователи</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="offcanvas-body">
                    <Users />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Sidebar;