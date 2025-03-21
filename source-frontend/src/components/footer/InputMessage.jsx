import { Button, Form } from "react-bootstrap";
import { BsArrowUp } from "react-icons/bs";
import "./InputMessage.css";

const InputMessage = () => {
    return (
        <Form className="input-message-container">
            <Form.Group className="flex-grow-1 me-2">
                <Form.Control type="text" placeholder="Введите сообщение..." />
            </Form.Group>
            <Button variant="primary">
                <BsArrowUp />
            </Button>
        </Form>
    );
};

export default InputMessage;