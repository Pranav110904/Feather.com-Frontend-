function ChatMessages({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`p-2 rounded-xl max-w-[80%] ${
            msg.sender === undefined
              ? "bg-gray-300 text-black self-start"
              : "bg-blue-500 text-white self-end ml-auto"
          }`}
        >
          {msg.message}
        </div>
      ))}
    </div>
  );
}

export default ChatMessages;
