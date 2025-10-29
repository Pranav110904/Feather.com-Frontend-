import React, { useState, useEffect } from "react";
import { socket } from "../../Utils/socket";
import axios from "axios";

const Chat = ({ chatId, userId }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    socket.emit("join_chat", chatId);

    socket.on("receive_message", (msg) => {
      setMessages(prev => [...prev, msg]);
    });

    axios.get(`http://localhost:8080/api/messages/${chatId}`, { withCredentials: true })
      .then(res => setMessages(Array.isArray(res.data) ? res.data : res.data.messages));

    return () => socket.off("receive_message");
  }, [chatId]);

  const sendMessage = () => {
    if (!text.trim()) return;

    socket.emit("send_message", { chatId, senderId: userId, content: text, attachments: [] });
    setText("");
  };

  return (
    <div>
      <div>
        {messages.map((m, i) => <p key={i}><b>{m.sender?.name}</b>: {m.content}</p>)}
      </div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
