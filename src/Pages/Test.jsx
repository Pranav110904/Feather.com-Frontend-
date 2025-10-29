import React, { useEffect, useState } from "react";
import Chat from "../components/ChatApp/TestChat";

function Test() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Example: Get logged-in user from localStorage after login
    const user = JSON.parse(localStorage.getItem("user")); // should store user on login
    if (user && user.id) {
      setUserId(user.id);
    }
  }, []);

  if (!userId) return <p>Loading...</p>; // wait until userId is ready

  return (
    <div>
      <Chat chatId="68f55b852a7f6389bf89a1a9" userId={userId} />
    </div>
  );
}

export default Test;
