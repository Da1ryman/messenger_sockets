import { Container } from "react-bootstrap";
import InputMessage from "../footer/InputMessage";
import Message from "./Message";
import "./Chat.css";

const Chat = () => {
    return (
        <Container className="chat-container">
            <div className="chat-messages">
                <Message />
            </div>
        </Container>
    );
};

export default Chat;