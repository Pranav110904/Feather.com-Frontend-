import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import RoundedButton from "../../components/UIComponents/RoundedButton";
import { BsFeather } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { BarLoader } from "react-spinners";

const PasswordSetup = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || location.state?.formData?.email;
  
  console.log(email);

  const handleSubmit = async () => {
    if (password.length < 8) {
      toast("Password must be at least 8 characters long", { type: "error" });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/create-password`,
        { email, password }
      );
      const data = response.data;
      if (response.status === 200 && data.success) {
        toast(data.message || "Password created successfully!", { type: "success" });
        setTimeout(() => {
          navigate("/setup/ProfilePicture", { state: { email } }); // or wherever next after success
        }, 1500);
      } else {
        toast(data.message || "Failed to create password.", { type: "error" });
      }
    } catch (err) {
      toast(
        err.response?.data?.message ||
          "Internal server error. Please try again.",
        { type: "error" }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden font-syne">
      <Toaster position="top-center" theme="dark" />
      
      {/* BarLoader Loading Overlay */}
      {isSubmitting && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <BarLoader color="#1D9BF0" height={8} width={240} />
        </div>
      )}

      {/* Background Image */}
      <div className="background-image absolute top-0 left-0 w-full h-full"></div>

      {/* Content Layer */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        {/* Glass Card */}
        <div className="glass-card w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-3xl p-6 sm:p-10 flex flex-col backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl relative">
          {/* Feather Logo */}
          <div className="w-full flex justify-center items-center">
            <BsFeather className="text-white text-4xl sm:text-5xl lg:text-6xl mb-12 sm:mb-16 mt-6 sm:mt-10" />
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 left-4 text-gray-300 hover:text-white text-2xl sm:text-3xl font-bold"
            disabled={isSubmitting}
          >
            ×
          </button>

          {/* Header */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-center">
            You'll need a password
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 mb-6 text-center">
            Make sure it's 8 characters or more.
          </p>

          {/* Password Input */}
          <div className="relative w-full mb-6">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="bg-[#35353590] backdrop-blur-md text-white px-4 py-3 rounded-md outline-none w-full text-sm sm:text-base pr-12 border border-white/20 focus:outline-none focus:border-[#1D9BF0] focus:ring-2 focus:ring-[#1D9BF0]"
              disabled={isSubmitting}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              disabled={isSubmitting}
            >
              {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </button>
          </div>

          {/* Terms Text */}
          <p className="text-[9px] sm:text-[11px] text-gray-400 mb-6 text-center">
            By signing up, you agree to the <span className="text-[#1D9BF0]">Terms of Service</span> and <span className="text-[#1D98F0]">Privacy Policy</span>, including <span className="text-[#1D98F0]">Cookie Use</span>. X may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy, like keeping your account secure and personalizing our services, including ads. <span className="text-[#1D98F0]">Learn more</span>. Others will be able to find you by email or phone number, when provided, unless you choose otherwise <span className="text-[#1D9BF0]">here</span>.
          </p>

          {/* Sign Up Button */}
          <div className="flex justify-center">
            <RoundedButton
              label="Sign up"
              onClick={handleSubmit}
              color={`${
                password.length >= 8 && !isSubmitting
                  ? "bg-[#1D9BF0]/80 text-white hover:bg-[#1D9BF0] hover:shadow-lg hover:shadow-[#1D9BF0]/40"
                  : "bg-[#1D9BF0]/30 text-white cursor-not-allowed"
              } w-full sm:w-48 py-3 backdrop-blur-md border border-[#1D9BF0]/40`}
              disabled={password.length < 8 || isSubmitting}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordSetup;
