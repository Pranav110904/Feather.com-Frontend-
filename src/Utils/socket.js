// src/socket.js
import { io } from "socket.io-client";

// Change this to your backend URL if deployed
const socket = io("http://localhost:8080", {
  withCredentials: true,
});

socket.on("connect", () => {
  console.log("✅ Connected to socket server:", socket.id);
});

socket.on("connect_error", (err) => {
  console.error("❌ Socket connection failed:", err.message);
});

export default socket;
