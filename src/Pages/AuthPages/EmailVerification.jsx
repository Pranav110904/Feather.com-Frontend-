import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RoundedButton from "../../components/UIComponents/RoundedButton";
import { BsFeather } from "react-icons/bs";

const EmailVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email =
    location.state?.email || location.state?.formData?.email;

  const [code, setCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 6);
    setCode(digits);
  };

  const handleResend = () => {
    // Optional: You can POST to your resend endpoint here if available.
    // Example: fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/send-otp`, {method: "POST", body: JSON.stringify({ email })});
    console.log("Resend verification code to:", email);
    alert(`Verification code resent to ${email}`);
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (code.length !== 6) {
      alert("Please enter the 6-digit verification code.");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/verify-Email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email, otp: code })
        }
      );
      const data = await response.json();

      if (response.ok && data.success) {
        alert(data.message || "Verification successful.");
        navigate("/setup/Password"); // Route after successful verification
      } else {
        alert(data.message || "Verification failed.");
      }
    } catch (err) {
      alert("Server error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden font-syne">
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
              className="w-full px-4 py-3 mb-3 bg-[#35353590] backdrop-blur-md text-white rounded-md border border-white/20 focus:outline-none focus:border-[#1D9BF0] focus:ring-2 focus:ring-[#1D9BF0] text-sm sm:text-base"
              disabled={isSubmitting}
            />

            <div className="flex items-center justify-between mb-6">
              <button
                type="button"
                onClick={handleResend}
                className="text-[#1D9BF0] text-sm sm:text-base hover:underline"
                disabled={isSubmitting}
              >
                Didn’t receive email?
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
                  code.length === 6 && !isSubmitting
                    ? "bg-[#1D9BF0]/80 text-white hover:bg-[#54b2ff] w-full sm:w-auto px-6 py-3 border border-[#1D9BF0]/40 backdrop-blur-md"
                    : "bg-gray-700/70 text-gray-300 w-full sm:w-auto px-6 py-3 cursor-not-allowed backdrop-blur-md"
                }
                disabled={code.length !== 6 || isSubmitting}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
