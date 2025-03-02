import { Button, Form } from "react-bootstrap"
import { BsArrowUp } from "react-icons/bs";

const InputMessage = () => {
    return (
        <Form className="w-100" style={{display:'grid', gridTemplateColumns: 'auto 40px'}}>
            <Form.Group className="me-4">
                <Form.Control type="text" placeholder="Message..." />
            </Form.Group>
            <Button variant="light">
                <BsArrowUp />
            </Button>
        </Form>
    )   
}

export default InputMessage;