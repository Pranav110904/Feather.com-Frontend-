import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BsFeather } from "react-icons/bs";
import RoundedButton from "../../components/RoundedButton";

const UsernameSetup = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { dob } = location.state || {};

  const handleSubmit = () => {
    if (username.trim()) {
      console.log(`Username: ${username}`);
      console.log(`Date of Birth: ${dob?.month}/${dob?.day}/${dob?.year}`);
      navigate("/home");
    } else {
      alert("Please enter a username");
    }
  };

  const handleClose = () => {
    navigate("/login"); // go back to login
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden font-syne">

      {/* Background Layer */}
      <div className="background-image absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"></div>

      {/* Content Layer */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 relative z-10 text-white">

        {/* Glass Card */}
        <div className="glass-card relative w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-3xl p-6 sm:p-10 flex flex-col items-center backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl">

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 left-4 text-gray-300 hover:text-white text-2xl sm:text-3xl font-bold"
          >
            ×
          </button>

          {/* Feather Icon */}
          <div className="w-full flex justify-center items-center mb-6 sm:mb-8 lg:mb-12">
            <BsFeather className="text-white text-5xl sm:text-6xl lg:text-7xl" />
          </div>

          {/* Header */}
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-center">
            Choose a Username
          </h1>
          <p className="text-gray-300 text-sm sm:text-base mb-6 text-center">
            This is how other people will see you. You can always change it later.
          </p>

          {/* Username Input */}
          <div className="w-full mb-6">
            <div className="relative w-full">
              <div className="flex items-center bg-[#35353590] rounded-md border border-white/20 backdrop-blur-md">
                <span className="px-3 text-white">@</span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="bg-transparent text-white py-3 outline-none flex-1 rounded-r-md"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-center">
            <RoundedButton
              label="Next"
              onClick={handleSubmit}
              color="bg-[#1D9BF0]/80 text-white hover:bg-[#1D9BF0] hover:shadow-lg hover:shadow-[#1D9BF0]/40 w-full sm:w-auto py-3 backdrop-blur-md border border-[#1D9BF0]/40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsernameSetup;
