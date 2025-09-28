import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoundedButton from "../components/RoundedButton";

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
      console.log(formData); // Debugging
      navigate("/setup/username", { state: { ...formData } });
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-syne bg-[#1f1f1f] text-white px-4">
      <div className="bg-black w-full max-w-lg h-auto sm:h-[80vh] rounded-3xl p-6 sm:p-10 overflow-x-hidden flex flex-col justify-start items-center">
        
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Create your account</h1>

        {/* Name Input */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="bg-[#353535] text-white px-4 py-3 rounded-md outline-none w-full mb-4"
        />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="bg-[#353535] text-white px-4 py-3 rounded-md outline-none w-full mb-6"
        />

        {/* Date of Birth Section */}
        <div className="w-full mb-6">
          <label className="font-bold text-sm sm:text-base block mb-2">Date of birth</label>
          <p className="text-xs sm:text-sm text-gray-300 mb-4">
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full">
            <select
              name="month"
              value={formData.month}
              onChange={handleInputChange}
              className="bg-[#353535] text-white px-4 py-3 rounded-md outline-none w-full"
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
              className="bg-[#353535] text-white px-4 py-3 rounded-md outline-none w-full"
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
              className="bg-[#353535] text-white px-4 py-3 rounded-md outline-none w-full"
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
          color={'bg-[#1D9BF0] text-white hover:bg-[#54b2ff]'}
        >
          Next
        </RoundedButton>
      </div>
    </div>
  );
};

export default AccountSetup;
