import { useEffect, useState } from "react";
import socket from "../../Utils/socket";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

function ChatApp() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit("joinChat", "global-room");

    socket.on("newMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("newMessage");
    };
  }, []);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const msg = { chatId: "global-room", message: text, sender: socket.id };
    socket.emit("sendMessage", msg);
    setMessages((prev) => [...prev, msg]); // add locally
  };

  return (
    <div className="flex flex-col justify-between w-full max-w-md mx-auto h-[90vh] bg-white border border-gray-300 rounded-2xl shadow-lg">
      <div className="bg-blue-600 text-white text-center py-3 rounded-t-2xl font-semibold">
        Chat Room 💬
      </div>
      <ChatMessages messages={messages} />
      <ChatInput onSend={sendMessage} />
    </div>
  );
}

export default ChatApp;
