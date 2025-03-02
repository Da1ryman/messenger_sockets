import OneMessage from "./OneMessage";

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
        <div style={{width:'100%'}}>
            {messages.map((message ) => (
                message.username === "Алексей" ? (
                    <div className=" d-flex justify-content-end">
                        <OneMessage username={message.username} timestamp={message.timestamp} message={message.message} className={"m-2 p-4 text-end border bg-info text-light"}/>
                    </div>
                    
                ) : (
                    <div>
                        <OneMessage username={message.username} timestamp={message.timestamp} message={message.message} className={"m-2 p-4 border bg-info text-light"}/>
                    </div>
                    
                )
            ))}
        </div>
    )
}

export default Message;