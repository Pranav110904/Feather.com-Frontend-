import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoundedButton from "../../components/UIComponents/RoundedButton";
import { BsFeather } from "react-icons/bs";

const AccountSetup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    month: "",
    day: "",
    year: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { name, email, month, day, year } = formData;
    if (name && email && month && day && year) {
      console.log(formData);
      navigate("/setup/Email", { state: { ...formData } });
    } else {
      alert("Please fill out all fields");
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Layer */}
      <div className="background-image absolute top-0 left-0 w-full h-full"></div>

      {/* Content Layer */}
      <div className="flex flex-col items-center justify-center min-h-screen font-syne text-white px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Glass Card */}
        <div className="glass-card w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto rounded-3xl p-6 sm:p-10 overflow-x-hidden flex flex-col justify-start items-center relative shadow-2xl">
          
          {/* Feather Icon */}
          <div className="w-full flex justify-center items-center">
            <BsFeather className="text-white text-4xl sm:text-5xl lg:text-6xl mb-12 sm:mb-16 mt-6 sm:mt-10" />
          </div>

          {/* Cross Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 left-4 text-gray-400 hover:text-white text-2xl sm:text-3xl font-bold"
          >
            ✕
          </button>

          {/* Header */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-center">
            Create your account
          </h1>

          {/* Name Input */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="bg-[#35353590] backdrop-blur-md text-white px-4 py-3 rounded-md outline-none w-full mb-4 text-sm sm:text-base"
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="bg-[#35353590] backdrop-blur-md text-white px-4 py-3 rounded-md outline-none w-full mb-6 text-sm sm:text-base"
          />

          {/* Date of Birth */}
          <div className="w-full mb-6">
            <label className="font-bold text-sm sm:text-base block mb-2">
              Date of birth
            </label>
            <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-snug">
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full">
              <select
                name="month"
                value={formData.month}
                onChange={handleInputChange}
                className="bg-[#35353590] backdrop-blur-md text-white px-4 py-3 rounded-md outline-none w-full text-sm sm:text-base"
              >
                <option value="" disabled>Month</option>
                {[
                  "January","February","March","April","May","June",
                  "July","August","September","October","November","December",
                ].map((month, index) => (
                  <option key={index} value={month}>{month}</option>
                ))}
              </select>

              <select
                name="day"
                value={formData.day}
                onChange={handleInputChange}
                className="bg-[#35353590] backdrop-blur-md text-white px-4 py-3 rounded-md outline-none w-full text-sm sm:text-base"
              >
                <option value="" disabled>Day</option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>

              <select
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                className="bg-[#35353590] backdrop-blur-md text-white px-4 py-3 rounded-md outline-none w-full text-sm sm:text-base"
              >
                <option value="" disabled>Year</option>
                {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <RoundedButton
            label="Next"
            onClick={handleSubmit}
            color={"bg-[#1D9BF0] text-white hover:bg-[#54b2ff] w-full sm:w-auto px-6 py-3"}
          >
            Next
          </RoundedButton>
        </div>
      </div>
    </div>
  );
};

export default AccountSetup;
