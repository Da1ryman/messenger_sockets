import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://192.168.253.135:8082/messages');
    setSocket(ws);

    ws.onopen = () => console.log('Connected to Message Service');
    ws.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };
    ws.onclose = () => console.log('Disconnected');

    return () => ws.close();
  }, []);

  const sendMessage = () => {
    if (socket && input) {
      socket.send(input);
      setInput('');
    }
  };

  return (
    <div className="messenger">
      <div className="chat-list">
        <h2>Чаты</h2>

        <div>Chat 1</div>

        <div>Chat 2</div>

      </div>
      <div className="chat-area">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              {msg}

            </div>

          ))}

        </div>
        <div className="input-area">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Введите сообщение..."
          />
          <button onClick={sendMessage}>Отправить</button>
        </div>

      </div>

    </div>
  );
}


export default App;