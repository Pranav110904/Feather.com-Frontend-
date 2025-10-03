import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoundedButton from "../../components/RoundedButton";
import { BsFeather } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const PasswordSetup = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (password.length >= 8) {
      console.log("Password:", password); // Debugging
      navigate("/next-step", { state: { password } });
    } else {
      alert("Password must be at least 8 characters long");
    }
  };

  const handleClose = () => {
    navigate("/"); // redirect to login or previous page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-syne bg-[#1f1f1f] text-white px-4 sm:px-6 lg:px-8">
      <div className="bg-black w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto rounded-3xl p-6 sm:p-10 flex flex-col justify-start items-center relative overflow-x-hidden">

        {/* Feather Logo */}
        <div className="w-full flex justify-center items-center">
          <BsFeather className="text-white text-4xl sm:text-5xl lg:text-6xl mb-12 sm:mb-16 mt-6 sm:mt-10" />
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-white text-2xl sm:text-3xl font-bold"
        >
          ✕
        </button>

        {/* Header */}
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-center">
          You'll need a password
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 mb-6 text-center">
          Make sure it's 8 characters or more.
        </p>

        {/* Password Input */}
        <div className="relative w-full mb-20 ">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="bg-[#353535] text-white px-4 py-3 rounded-md outline-none w-full text-sm sm:text-base pr-12"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </button>
        </div>
        
        <div>
          <p className="text-[9px] sm:text-[11px] text-gray-400 mb-6 text-center">
            By signing up, you agree to the <span className="text-[#1D9BF0]">Terms of Service</span> and <span className="text-[#1D98F0]">Privacy Policy</span>, including <span className="text-[#1D98F0]">Cookie Use</span>. X may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy, like keeping your account secure and personalizing our services, including ads. <span className="text-[#1D98F0]">Learn more</span>. Others will be able to find you by email or phone number, when provided, unless you choose otherwise <span className="text-[#1D9BF0]">here</span>.
          </p>
        </div>

        {/* Sign Up Button */}
        <RoundedButton
          label="Sign up"
          onClick={handleSubmit}
          color={"bg-[#1D9BF0] text-white hover:bg-[#54b2ff] w-full sm:w-auto px-6 py-3"}
        >
          Sign up
        </RoundedButton>
      </div>
    </div>
  );
};

export default PasswordSetup;
