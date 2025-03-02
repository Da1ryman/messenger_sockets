import { Container } from "react-bootstrap"
import InputMessage from "../footer/InputMessage";
import Message from "./Message";

const Chat = () => {
    return (
        <Container className="border-end border-start" style={{overflow:"auto"}}>
            <Message/>
        </Container>
    )
}

export default Chat;