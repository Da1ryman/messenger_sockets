import OneMessage from "./OneMessage";
import "./Message.css";

const Message = () => {
    const messages = [
        {
            username: "Алексей",
            timestamp: "2023-10-05T14:30:00Z",
            message: "Привет! Как дела?"
        },
        {
            username: "Мария",
            timestamp: "2023-10-05T14:35:00Z",
            message: "Всё отлично, спасибо!"
        },
        {
            username: "Иван",
            timestamp: "2023-10-05T14:40:00Z",
            message: "Кто готов к встрече завтра?"
        },
        {
            username: "Ольга",
            timestamp: "2023-10-05T14:45:00Z",
            message: "Я буду, в 10:00 утра."
        },
        {
            username: "Алексей",
            timestamp: "2023-10-05T14:50:00Z",
            message: "Отлично, тогда до завтра!"
        }
    ];

    return (
        <div className="message-container">
            {messages.map((message, index) => (
                <div key={index} className={`message ${message.username === "Алексей" ? "user" : "other"}`}>
                    <div className="message-content">
                        <div className="message-header">
                            <img
                                src={`https://i.pravatar.cc/30?img=${index}`}
                                alt="avatar"
                                className="message-avatar"
                            />
                            <div>
                                <div className="message-username">{message.username}</div>
                                <div className="message-timestamp">
                                    {new Date(message.timestamp).toLocaleTimeString()}
                                </div>
                            </div>
                        </div>
                        <div className="message-text">{message.message}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Message;