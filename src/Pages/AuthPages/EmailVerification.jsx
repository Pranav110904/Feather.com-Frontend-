import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RoundedButton from "../../components/RoundedButton";
import { BsFeather } from "react-icons/bs";

const EmailVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email =
    location.state?.email || location.state?.formData?.email || "crazy.223m@gmail.com";

  const [code, setCode] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 6);
    setCode(digits);
  };

  const handleResend = () => {
    console.log("Resend verification code to:", email);
    alert(`Verification code resent to ${email}`);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (code.length !== 6) {
      alert("Please enter the 6-digit verification code.");
      return;
    }
    console.log("Submitted code:", code);
    navigate("/"); // change route as needed
  };

  const handleClose = () => {
    navigate("/"); // redirect to login page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-syne bg-[#1f1f1f] text-white px-4 sm:px-6 lg:px-8">
      <div className="bg-black w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto rounded-3xl p-6 sm:p-10 flex flex-col justify-start items-center relative">
        
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
        <p className="text-gray-400 text-center text-sm sm:text-base mb-6 break-words">
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
            className="w-full px-4 py-3 mb-3 bg-[#353535] text-white rounded-md border border-transparent focus:outline-none focus:border-[#1D9BF0] focus:ring-2 focus:ring-[#1D9BF0] text-sm sm:text-base"
          />

          <div className="flex items-center justify-between mb-6">
            <button
              type="button"
              onClick={handleResend}
              className="text-blue-400 text-sm sm:text-base hover:underline"
            >
              Didn’t receive email?
            </button>
            <div className="text-sm sm:text-base text-gray-400">{code.length}/6</div>
          </div>

          {/* Full-width Next button */}
          
          <div className="flex justify-center align-middle">
            <RoundedButton
              label="Next"
              onClick={handleSubmit}
              color={
                code.length === 6
                  ? "bg-[#1D9BF0] text-white hover:bg-[#54b2ff] w-full sm:w-auto px-6 py-3"
                  : "bg-gray-700 text-gray-300 w-full sm:w-auto px-6 py-3 cursor-not-allowed"
              }
            />
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;
