import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RoundedButton from "../../components/UIComponents/RoundedButton";
import { BsFeather } from "react-icons/bs";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { BarLoader } from "react-spinners";
import useEmailStore from "../../app/Store";

const EmailVerification = () => {
  const navigate = useNavigate();
  const email = useEmailStore(state => state.email);
  console.log(email);

  const [code, setCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const inputRef = useRef(null);

  // Global loader: show if submitting or resending
  const loading = isSubmitting || isResending;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 6);
    setCode(digits);
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (code.length !== 6) {
      toast("Please enter the 6-digit verification code.", { type: "error" });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/verify-Email`,
        { email, otp: code }
      );
      const data = response.data;
      if (response.status === 200 && data.success) {
        toast(data.message || "Verification successful.", { type: "success" });
        setTimeout(() => {
          navigate("/setup/Password", { state: { email } });
        }, 1000);
      } else {
        toast(data.message || "Verification failed.", { type: "error" });
      }
    } catch (err) {
      toast(
        err.response?.data?.message || "Server error. Please try again later.",
        { type: "error" }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Resend OTP handler
  const handleResend = async () => {
    setIsResending(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/resend-otp`,
        { email }
      );
      const data = response.data;
      if (response.status === 200 && data.success) {
        toast(data.message || "A new OTP has been sent to your email.", { type: "success" });
      } else {
        toast(data.message || "OTP resend failed.", { type: "error" });
      }
    } catch (err) {
      toast(
        err.response?.data?.message || "Failed to resend OTP. Please try again later.",
        { type: "error" }
      );
    } finally {
      setIsResending(false);
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden font-syne">
      {/* Sonner Toaster for feedback */}
      <Toaster position="top-center" theme="dark" />
      
      {/* BarLoader Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <BarLoader color="#1D9BF0" size={50} />
        </div>
      )}

      {/* Background Layer */}
      <div className="background-image absolute top-0 left-0 w-full h-full"></div>

      {/* Content Layer */}
      <div className="flex flex-col items-center justify-center min-h-screen text-white px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Glass Card */}
        <div className="glass-card w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto rounded-3xl p-6 sm:p-10 flex flex-col justify-start items-center relative shadow-2xl">
          {/* Feather Icon */}
          <div className="w-full flex justify-center items-center">
            <BsFeather className="text-white text-4xl sm:text-5xl lg:text-6xl mb-12 sm:mb-16 mt-6 sm:mt-10" />
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 left-4 text-gray-400 hover:text-white text-2xl sm:text-3xl font-bold"
            disabled={loading}
          >
            ✕
          </button>

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-center">
            We sent you a code
          </h2>
          <p className="text-gray-300 text-center text-sm sm:text-base mb-6 break-words">
            Enter it below to verify <span className="font-medium">{email}</span>
          </p>

          {/* Form */}
          <form className="w-full" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              id="verification_code"
              name="verification_code"
              type="text"
              inputMode="numeric"
              pattern="\d*"
              autoComplete="one-time-code"
              maxLength={6}
              value={code}
              onChange={handleChange}
              placeholder="Verification code"
              className="w-full px-4 py-3 mb-3 bg-[#35353590] backdrop-blur-md text-white rounded-md border border-white/20 focus:outline-none focus:border-[#1D9BF0] focus:ring-2 focus:ring-[#1D9BF0] text-md sm:text-base"
              disabled={loading}
            />

            <div className="flex items-center justify-between mb-6">
              <button
                type="button"
                onClick={handleResend}
                className={`text-[#1D9BF0] text-sm sm:text-base hover:underline ${isResending ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={loading}
              >
                {isResending ? "Resending..." : "Resend OTP"}
              </button>
              <div className="text-sm sm:text-base text-gray-400">
                {code.length}/6
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center align-middle">
              <RoundedButton
                label={isSubmitting ? "Verifying..." : "Next"}
                onClick={handleSubmit}
                color={
                  code.length === 6 && !loading
                    ? "bg-[#1D9BF0]/80 text-white hover:bg-[#54b2ff] w-full sm:w-auto px-6 py-3 border border-[#1D9BF0]/40 backdrop-blur-md"
                    : "bg-gray-700/70 text-gray-300 w-full sm:w-auto px-6 py-3 cursor-not-allowed backdrop-blur-md"
                }
                disabled={code.length !== 6 || loading}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
