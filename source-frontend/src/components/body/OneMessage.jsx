import { Card } from "react-bootstrap";
import "./OneMessage.css";

const OneMessage = (props) => {
    const isUser = props.username === "Алексей"; // Пример проверки, что сообщение от текущего пользователя

    return (
        <Card className={`message-card ${isUser ? "user" : "other"}`}>
            <div className="message-header">
                <img
                    src={`https://i.pravatar.cc/30?img=${props.username.length}`} // Пример аватарки
                    alt="avatar"
                    className="message-avatar"
                />
                <div>
                    <div className="message-username">{props.username}</div>
                    <div className="message-timestamp">
                        {new Date(props.timestamp).toLocaleTimeString()}
                    </div>
                </div>
            </div>
            <div className="message-text">{props.message}</div>
        </Card>
    );
};

export default OneMessage;