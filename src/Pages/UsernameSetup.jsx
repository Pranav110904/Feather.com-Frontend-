import  { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";


const UsernameSetup = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { dob } = location.state || {}; 

  const handleSubmit = () => {
    if (username.trim()) {
      console.log(`Username:${username}`);
      console.log(`Date of Birth: ${dob?.month}/${dob?.day}/${dob?.year}`);
      console.log(username)
      navigate("/home"); 
    } else {
      alert("Please enter a username");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-syne bg-[#1f1f1f] text-white px-4">
      <div className="bg-black w-full max-w-lg h-auto sm:h-[70vh] rounded-3xl p-6 sm:p-10 overflow-x-hidden flex flex-col justify-center items-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Choose a Username</h1>
        <p className="text-sm sm:text-base text-[#ffffff] mb-6 text-center">
          This is how other people will see you on Twitter. You can always change it later.
        </p>
        <div className="w-full">
          {/* Username Input */}
          <div className="relative w-full mb-4">
            <div className="flex items-center bg-[#353535] text-white rounded-md">
                <span className="px-3 text-white">@</span>
                <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="bg-transparent text-white  py-3 outline-none flex-1 rounded-r-md"
                />
            </div>
            </div>

        </div>
        <button
          onClick={handleSubmit}
          className="mt-4 transition-all duration-300 ease-in-out bg-[#1D9BF0] hover:bg-[#54b2ff] text-white px-6 py-3 rounded-md w-full sm:w-auto"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UsernameSetup;